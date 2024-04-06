import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

import {getSelectedLanguage} from './util/localStorageHelper';

const ns = ['app'];
const selectedLanguage = getSelectedLanguage();

// https://react.i18next.com/latest/using-with-hooks
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: () => {
        return '/locales/{{lng}}/{{ns}}.json';
      },
    },
    debug: false,
    // fallbackLng: 'en',
    interpolation: {escapeValue: false},
    load: 'languageOnly',
    lng: selectedLanguage,
    ns,
    supportedLngs: ['en', 'hi'],
  });

export {i18n};
