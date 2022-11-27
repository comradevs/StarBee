import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Routes from 'routes';

import translationEN from 'locales/en/translation.json';

import 'styles/index.css';

i18next.use(initReactI18next).init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: translationEN,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
