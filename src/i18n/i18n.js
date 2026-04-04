import * as RNLocalize from "react-native-localize";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import pt from './locales/pt.json';
import en from './locales/en.json';

const resources = {
  pt: {
    translation: pt 
  },
  en: {
    translation: en
  }
};

const getDeviceLanguage = () => {
    const locales = RNLocalize.getLocales();
    
    if (locales && locales.length > 0) {
        return locales[0].languageCode;
    }
    
    return 'en';
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: getDeviceLanguage(), 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    },
    debug: __DEV__
  });

export default i18n;