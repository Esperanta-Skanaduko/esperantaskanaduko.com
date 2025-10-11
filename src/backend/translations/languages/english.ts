import { Translation } from '../interfaces/translation';

const English: Translation = {
  hello: 'Hello',
  world: 'World',
  common: {
    siteName: 'Esperanta Skanaduko',
    description: 'Learn Esperanto through an engaging digital experience. Free resources and tools for learning the international language.',
  },
  navigation: {
    home: 'Home',
    about: 'About',
    library: 'Library',
  },
  about: {
    websiteTitle: 'About the website',
    welcomeMessage: 'Welcome to libraro, a new online Esperanto library. This project\'s goal is to provide a well-organized library of original and translated texts.',
    licenseTitle: 'License issues',
    licenseInfo: 'Many texts are old enough to automatically be in the public domain, many are in the public domain in some countries while copyrighted in others. This website publishes works for which the international minimum of 50 years after the author\'s death is satisfied. It is the reader\'s responsibility to know his or her country\'s copyright laws.',
  },
  auth: {
    signUp: 'Sign Up',
    logIn: 'Log In',
    signOut: 'Sign Out',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    alreadyHaveAccount: 'Already have an account?',
    noAccount: 'Don\'t have an account?',
    createAccount: 'Create Account',
    welcomeBack: 'Welcome Back',
    getStarted: 'Get Started',
    errors: {
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email address',
      passwordRequired: 'Password is required',
      passwordTooShort: 'Password must be at least 6 characters',
      passwordsNoMatch: 'Passwords do not match',
      emailInUse: 'This email is already in use',
      userNotFound: 'No account found with this email',
      wrongPassword: 'Incorrect password',
      tooManyAttempts: 'Too many failed attempts. Please try again later',
      networkError: 'Network error. Please check your connection',
      unknownError: 'An error occurred. Please try again',
    },
    success: {
      accountCreated: 'Account created successfully!',
      signedIn: 'Welcome back!',
      signedOut: 'Signed out successfully',
    },
  },
};

export default English;
