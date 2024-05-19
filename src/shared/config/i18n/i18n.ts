import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const isProduction = process.env.NODE_ENV === 'production';

const i18nConfig: any = {
  // Use 'any' type to avoid TypeScript error
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: [],
  },
};

if (isProduction) {
  if (i18nConfig.whitelist && i18nConfig.whitelist.includes('en-GB')) {
    // Remove 'en-GB' from the whitelist
    i18nConfig.whitelist = i18nConfig.whitelist.filter(
      (lang: string) => lang !== 'en-GB',
    );
  }
  i18nConfig.backend = {
    loadPath: '/public/locales/{{lng}}/{{ns}}.json', // Example endpoint to fetch translations
    // Example endpoint to fetch translations
    // Other production-specific backend configurations...
  };
}
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init(i18nConfig)
  .then(() => {
    //console.log('i18n initialized:', i18n.languages); // Check initialized languages
    //console.log('Available languages:'); // Check available languages
  })
  .catch(error => {
    //console.error('i18n initialization error:', error);
  });

//console.log(isProduction, '18N', process.env.NODE_ENV);
export default i18n;
