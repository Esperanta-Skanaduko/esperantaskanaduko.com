import English from './languages/english';
import Esperanto from './languages/esperanto';
import { LanguageCode } from './types/languageCode';

const Translations = () => {
  const languageCode: LanguageCode = (localStorage.getItem('languageCode') as LanguageCode) ?? 'en';
  switch (languageCode) {
    case 'en':
      return English;
    case 'eo':
      return Esperanto;
    default:
      return English;
  }
};

export default Translations;
