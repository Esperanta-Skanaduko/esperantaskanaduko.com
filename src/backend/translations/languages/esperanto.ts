import { Translation } from '../interfaces/translation';

const Esperanto: Translation = {
  hello: 'Saluton',
  world: 'Mondo',
  common: {
    siteName: 'Esperanta Skanaduko',
    description: 'Lernu Esperanton tra engaĝa cifereca sperto. Senpagaj rimedoj kaj iloj por lerni la internacian lingvon.',
  },
  navigation: {
    home: 'Hejmo',
    about: 'Pri Ni',
    library: 'Biblioteko',
  },
  about: {
    websiteTitle: 'Pri la retejo',
    welcomeMessage: 'Bonvenon al libraro, nova interreta Esperanta biblioteko. La celo de ĉi tiu projekto estas provizi bone organizitan bibliotekon de originalaj kaj tradukitaj tekstoj.',
    licenseTitle: 'Licencaj demandoj',
    licenseInfo: 'Multaj tekstoj estas sufiĉe malnovaj por aŭtomate esti en la publika domajno, multaj estas en la publika domajno en iuj landoj dum ili estas kopirajtigitaj en aliaj. Ĉi tiu retejo publikigas verkojn por kiuj la internacia minimumo de 50 jaroj post la morto de la aŭtoro estas plenumita. Estas la respondeco de la leganto koni la kopirajtan leĝaron de sia lando.',
  },
  auth: {
    signUp: 'Registriĝi',
    logIn: 'Ensaluti',
    signOut: 'Elsaluti',
    email: 'Retpoŝto',
    password: 'Pasvorto',
    confirmPassword: 'Konfirmi Pasvorton',
    forgotPassword: 'Ĉu vi forgesis pasvorton?',
    alreadyHaveAccount: 'Ĉu vi jam havas konton?',
    noAccount: 'Ĉu vi ne havas konton?',
    createAccount: 'Krei Konton',
    welcomeBack: 'Bonvenon Reen',
    getStarted: 'Komenci',
    errors: {
      emailRequired: 'Retpoŝto estas bezonata',
      emailInvalid: 'Bonvolu enigi validan retpoŝtadreson',
      passwordRequired: 'Pasvorto estas bezonata',
      passwordTooShort: 'Pasvorto devas esti almenaŭ 6 signoj',
      passwordsNoMatch: 'Pasvortoj ne kongruas',
      emailInUse: 'Ĉi tiu retpoŝto jam estas uzata',
      userNotFound: 'Neniu konto trovita kun ĉi tiu retpoŝto',
      wrongPassword: 'Malĝusta pasvorto',
      tooManyAttempts: 'Tro multaj malsukcesaj provoj. Bonvolu reprovi poste',
      networkError: 'Reta eraro. Bonvolu kontroli vian konekton',
      unknownError: 'Eraro okazis. Bonvolu reprovi',
    },
    success: {
      accountCreated: 'Konto kreita sukcese!',
      signedIn: 'Bonvenon reen!',
      signedOut: 'Elsalutita sukcese',
    },
  },
};

export default Esperanto;
