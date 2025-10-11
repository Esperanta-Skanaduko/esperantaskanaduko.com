import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  Auth,
  UserCredential,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

/**
 * Firebase Authentication Module
 * Provides authentication functions for user management
 */

// Initialize Firebase App if not already initialized
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with the app instance
export const auth: Auth = getAuth(app);

/**
 * Create a new user account with email and password
 * @param email - User's email address
 * @param password - User's password (min 6 characters)
 * @returns Promise with UserCredential
 */
export const signUpWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in existing user with email and password
 * @param email - User's email address
 * @param password - User's password
 * @returns Promise with UserCredential
 */
export const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sign out current user
 * @returns Promise<void>
 */
export const signOutUser = async (): Promise<void> => {
  return await signOut(auth);
};

/**
 * Send password reset email
 * @param email - User's email address
 * @returns Promise<void>
 */
export const resetPassword = async (email: string): Promise<void> => {
  return await sendPasswordResetEmail(auth, email);
};

/**
 * Subscribe to auth state changes
 * @param callback - Function to call when auth state changes
 * @returns Unsubscribe function
 */
export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export type { User, UserCredential };
