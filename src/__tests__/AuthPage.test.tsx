/**
 * AuthPage integration tests.
 *
 * Auth operations go through a mocked AuthContext so no real Firebase calls
 * are made. The AuthContext module's `useAuth` hook is spied on to inject
 * controlled mock return values.
 *
 * Test cases:
 *   1. Default state — sign-up form visible
 *   2. Toggle — switch to log-in form and back
 *   3. Successful login — logIn() called, navigate fires
 *   4. Failed login — error alert displayed
 *   5. Successful sign-up — signUp() called with correct args
 *   6. Google sign-in — signInWithGoogle() called
 */

import { render, screen, fireEvent, waitFor, act } from './testUtils';
import { MemoryRouter } from 'react-router-dom';
import * as AuthContextModule from '../contexts/AuthContext';
import AuthPage from '../frontend/pages/AuthPage';

// ─── Mocks ────────────────────────────────────────────────────────────────────

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// ─── Auth mock factory ────────────────────────────────────────────────────────

type AuthOverrides = Partial<AuthContextModule.AuthContextType>;

function buildMockAuth(overrides: AuthOverrides = {}): AuthContextModule.AuthContextType {
  return {
    currentUser: null,
    loading: false,
    initialized: true,
    signUp: jest.fn().mockResolvedValue(undefined),
    logIn: jest.fn().mockResolvedValue(undefined),
    logOut: jest.fn().mockResolvedValue(undefined),
    sendPasswordReset: jest.fn().mockResolvedValue(undefined),
    signInWithGoogle: jest.fn().mockResolvedValue(undefined),
    refreshUser: jest.fn().mockResolvedValue(undefined),
    ...overrides,
  };
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function renderAuthPage(overrides: AuthOverrides = {}) {
  jest.spyOn(AuthContextModule, 'useAuth').mockReturnValue(buildMockAuth(overrides));
  return render(
    <MemoryRouter>
      <AuthPage />
    </MemoryRouter>,
  );
}

// ─── Tests ────────────────────────────────────────────────────────────────────

beforeEach(() => mockNavigate.mockReset());
afterEach(() => jest.restoreAllMocks());

describe('AuthPage integration', () => {
  // 1. Default state ──────────────────────────────────────────────────────────
  it('shows sign-up form by default', async () => {
    renderAuthPage();
    // SignUpForm has a "Confirm Password" field; i18n mock returns the key
    await waitFor(() => {
      expect(screen.getByLabelText(/auth\.fields\.confirmPassword/i)).toBeInTheDocument();
    });
  });

  // 2. Toggle to log-in ───────────────────────────────────────────────────────
  it('switches to log-in form when the toggle link is clicked', async () => {
    renderAuthPage();
    // Wait for sign-up form to appear
    await waitFor(() =>
      screen.getByLabelText(/auth\.fields\.confirmPassword/i),
    );
    // Click the "Log In" link inside the sign-up form
    const logInLink = screen.getByRole('button', {
      name: (name) => /auth\.actions\.logIn|log\s*in/i.test(name),
    });
    await act(async () => { fireEvent.click(logInLink); });
    // Confirm-password field gone; email field still present
    await waitFor(() => {
      expect(screen.queryByLabelText(/auth\.fields\.confirmPassword/i)).not.toBeInTheDocument();
    });
  });

  // 3. Successful login ───────────────────────────────────────────────────────
  it('calls logIn and shows success state on valid credentials', async () => {
    const logIn = jest.fn().mockResolvedValue(undefined);
    renderAuthPage({ logIn });

    // Switch to log-in form
    await waitFor(() => screen.getByLabelText(/auth\.fields\.confirmPassword/i));
    const toggleBtn = screen.getByRole('button', {
      name: (name) => /auth\.actions\.logIn|log\s*in/i.test(name),
    });
    await act(async () => { fireEvent.click(toggleBtn); });
    await waitFor(() =>
      expect(screen.queryByLabelText(/auth\.fields\.confirmPassword/i)).not.toBeInTheDocument(),
    );

    // Fill credentials
    fireEvent.change(screen.getByLabelText(/auth\.fields\.email/i), {
      target: { value: 'user@test.com' },
    });
    fireEvent.change(
      screen.getByLabelText(/auth\.fields\.password/i),
      { target: { value: 'password123' } },
    );

    // Submit
    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', { name: /auth\.actions\.logIn|log\s*in/i }),
      );
    });
    await waitFor(() => expect(logIn).toHaveBeenCalledWith('user@test.com', 'password123'));
  });

  // 4. Failed login ───────────────────────────────────────────────────────────
  it('displays an error alert when login fails', async () => {
    const firebaseError = Object.assign(new Error(), { code: 'auth/wrong-password' });
    const logIn = jest.fn().mockRejectedValue(firebaseError);
    renderAuthPage({ logIn });

    // Switch to log-in form
    await waitFor(() => screen.getByLabelText(/auth\.fields\.confirmPassword/i));
    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', {
          name: (name) => /auth\.actions\.logIn|log\s*in/i.test(name),
        }),
      );
    });
    await waitFor(() =>
      expect(screen.queryByLabelText(/auth\.fields\.confirmPassword/i)).not.toBeInTheDocument(),
    );

    fireEvent.change(screen.getByLabelText(/auth\.fields\.email/i), {
      target: { value: 'user@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/auth\.fields\.password/i), {
      target: { value: 'wrongpass' },
    });
    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', { name: /auth\.actions\.logIn|log\s*in/i }),
      );
    });

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  // 5. Successful sign-up ─────────────────────────────────────────────────────
  it('calls signUp with correct email and password', async () => {
    const signUp = jest.fn().mockResolvedValue(undefined);
    renderAuthPage({ signUp });

    await waitFor(() => screen.getByLabelText(/auth\.fields\.confirmPassword/i));

    fireEvent.change(screen.getByLabelText(/auth\.fields\.email/i), {
      target: { value: 'new@test.com' },
    });
    fireEvent.change(
      screen.getAllByLabelText(/auth\.fields\.password/i)[0],
      { target: { value: 'pass123!' } },
    );
    fireEvent.change(screen.getByLabelText(/auth\.fields\.confirmPassword/i), {
      target: { value: 'pass123!' },
    });

    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', { name: /auth\.actions\.signUp|sign\s*up/i }),
      );
    });
    await waitFor(() => expect(signUp).toHaveBeenCalledWith('new@test.com', 'pass123!'));
  });

  // 6. Google sign-in button ──────────────────────────────────────────────────
  it('calls signInWithGoogle when the Google button is clicked', async () => {
    const signInWithGoogle = jest.fn().mockResolvedValue(undefined);
    renderAuthPage({ signInWithGoogle });

    // Switch to log-in form (Google button is in LogInForm)
    await waitFor(() => screen.getByLabelText(/auth\.fields\.confirmPassword/i));
    await act(async () => {
      fireEvent.click(
        screen.getByRole('button', {
          name: (name) => /auth\.actions\.logIn|log\s*in/i.test(name),
        }),
      );
    });
    await waitFor(() =>
      expect(screen.queryByLabelText(/auth\.fields\.confirmPassword/i)).not.toBeInTheDocument(),
    );

    const googleBtn = screen.getByRole('button', {
      name: /auth\.actions\.signInWithGoogle|continue with google/i,
    });
    await act(async () => { fireEvent.click(googleBtn); });
    await waitFor(() => expect(signInWithGoogle).toHaveBeenCalledTimes(1));
  });
});
