import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config.json';
import axios from 'axios';

import './base.scss';

import { Router, hashHistory } from 'react-router'
import { routes } from './routes'

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
// import localeData from './../i18n/en-US.json';
import localeData from './../i18n/ru-RU.json';

axios.defaults.baseURL = config.baseURL;

addLocaleData([...en, ...ru]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
// const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;
const messages = localeData;

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.
if (!window.intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/ru.js'
  ], (require) => {
    require('intl');
    require('intl/locale-data/jsonp/en.js');
    require('intl/locale-data/jsonp/ru.js');

    render();

  });
} else {
  render();
}

const render = () => {
  ReactDOM.render (
    <IntlProvider locale={language} messages={messages}>
      <Router history={hashHistory} routes={routes} />
    </IntlProvider>,
    document.getElementById('root')
  );
};
