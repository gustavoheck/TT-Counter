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
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.LanguageManager.localeIdentifier
      : NativeModules.I18nManager.localeIdentifier;
  

  return deviceLanguage.split('_')[0];
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