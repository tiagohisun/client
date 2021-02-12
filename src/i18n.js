import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './static/locales/en/translationEn.json'
import translationPt from './static/locales/pt/translationPt.json'

// the translations
const resources = {
  en: {
    translation: translationEn, 
  },
  pt: {
    translation: translationPt, 
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });


export default i18n;