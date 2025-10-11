import React, { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import {
  User,
  signUpWithEmail,
  signInWithEmail,
  signOutUser,
  onAuthChange,
  resetPassword,
} from '../backend/firebase/auth';

/**
 * Authentication Context Interface
 * Provides user authentication state and functions
 */
interface AuthContextType {
  /** Current authenticated user */
  currentUser: User | null;
  /** Loading state during initial auth check */
  loading: boolean;
  /** Whether auth state has been persisted */
  initialized: boolean;
  /** Sign up a new user with email and password */
  signUp: (email: string, password: string) => Promise<void>;
  /** Log in an existing user with email and password */
  logIn: (email: string, password: string) => Promise<void>;
  /** Log out the current user */
  logOut: () => Promise<void>;
  /** Send a password reset email */
  sendPasswordReset: (email: string) => Promise<void>;
  /** Refresh user data */
  refreshUser: () => Promise<void>;
}

/**
 * Create Auth Context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Custom hook to use Auth Context
 * @throws Error if used outside AuthProvider
 * @returns AuthContextType
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

/**
 * Auth Provider Props
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Authentication Provider Component
 * Wraps app to provide authentication context
 * Manages authentication state with Firebase
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  /**
   * Sign up new user with email and password
   * @param email - User email address
   * @param password - User password
   * @throws Error if sign up fails
   */
  const signUp = useCallback(async (email: string, password: string): Promise<void> => {
    try {
      await signUpWithEmail(email, password);
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Sign up error:', error);
      }
      throw error;
    }
  }, []);

  /**
   * Log in existing user with email and password
   * @param email - User email address
   * @param password - User password
   * @throws Error if login fails
   */
  const logIn = useCallback(async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmail(email, password);
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Log in error:', error);
      }
      throw error;
    }
  }, []);

  /**
   * Log out current user
   * @throws Error if logout fails
   */
  const logOut = useCallback(async (): Promise<void> => {
    try {
      await signOutUser();
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Log out error:', error);
      }
      throw error;
    }
  }, []);

  /**
   * Send password reset email
   * @param email - User email address
   * @throws Error if sending reset email fails
   */
  const sendPasswordReset = useCallback(async (email: string): Promise<void> => {
    try {
      await resetPassword(email);
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error('Password reset error:', error);
      }
      throw error;
    }
  }, []);

  /**
   * Refresh current user data
   */
  const refreshUser = useCallback(async (): Promise<void> => {
    // User will be refreshed through onAuthChange listener
    // This is a placeholder for future implementation if needed
    return Promise.resolve();
  }, []);

  /**
   * Subscribe to auth state changes
   * Sets up listener on mount and cleans up on unmount
   */
  useEffect(() => {
    let mounted = true;

    const unsubscribe = onAuthChange((user) => {
      if (mounted) {
        setCurrentUser(user);
        setLoading(false);
        setInitialized(true);
      }
    });

    // Cleanup function
    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    initialized,
    signUp,
    logIn,
    logOut,
    sendPasswordReset,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
