import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './core/Root';
import configureStore from './core/store';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./core/Root', () => {
    const NextRoot = require('./core/Root').default; // eslint-disable-line global-require
    render(
      <NextRoot store={store} history={history} />,
      document.getElementById('root')
    );
  });
}

