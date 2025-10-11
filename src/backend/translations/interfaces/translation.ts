export interface Translation {
  hello: string;
  world: string;
  common: {
    siteName: string;
    description: string;
  };
  navigation: {
    home: string;
    about: string;
    library: string;
  };
  about: {
    websiteTitle: string;
    welcomeMessage: string;
    licenseTitle: string;
    licenseInfo: string;
  };
  auth: {
    signUp: string;
    logIn: string;
    signOut: string;
    email: string;
    password: string;
    confirmPassword: string;
    forgotPassword: string;
    alreadyHaveAccount: string;
    noAccount: string;
    createAccount: string;
    welcomeBack: string;
    getStarted: string;
    errors: {
      emailRequired: string;
      emailInvalid: string;
      passwordRequired: string;
      passwordTooShort: string;
      passwordsNoMatch: string;
      emailInUse: string;
      userNotFound: string;
      wrongPassword: string;
      tooManyAttempts: string;
      networkError: string;
      unknownError: string;
    };
    success: {
      accountCreated: string;
      signedIn: string;
      signedOut: string;
    };
  };
}
