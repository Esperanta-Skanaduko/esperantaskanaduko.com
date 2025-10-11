import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
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
  currentUser: User | null;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signUp: (email: string, password: string) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  sendPasswordReset: (email: string) => Promise<void>;
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
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Sign up new user
   */
  const signUp = async (email: string, password: string): Promise<void> => {
    await signUpWithEmail(email, password);
  };

  /**
   * Log in existing user
   */
  const logIn = async (email: string, password: string): Promise<void> => {
    await signInWithEmail(email, password);
  };

  /**
   * Log out current user
   */
  const logOut = async (): Promise<void> => {
    await signOutUser();
  };

  /**
   * Send password reset email
   */
  const sendPasswordReset = async (email: string): Promise<void> => {
    await resetPassword(email);
  };

  /**
   * Subscribe to auth state changes
   */
  useEffect(() => {
    const unsubscribe = onAuthChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    loading,
    signUp,
    logIn,
    logOut,
    sendPasswordReset,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
