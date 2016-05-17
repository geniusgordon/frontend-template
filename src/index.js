import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App'); // eslint-disable-line global-require
    render(
      <NewApp.default />,
      document.getElementById('root')
    );
  });
}

