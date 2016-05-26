import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './Root';
import configureStore from './store';

const store = configureStore();

render(
  <Root store={store} history={browserHistory} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default; // eslint-disable-line global-require
    render(
      <NextRoot store={store} history={browserHistory} />,
      document.getElementById('root')
    );
  });
}

