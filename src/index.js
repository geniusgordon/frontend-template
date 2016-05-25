import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NewApp = require('./containers/App'); // eslint-disable-line global-require
    render(
      <NewApp.default />,
      document.getElementById('root')
    );
  });
}

