import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import DevTools from './DevTools';

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;

