import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from '../locales/es.json';
import en from '../locales/en.json';
import zh from '../locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      zh: { translation: zh }
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en', 'zh'],
    interpolation: {
      escapeValue: false // No se necesita para React ya que maneja la inyección XSS.
    }
  });

export default i18n;
