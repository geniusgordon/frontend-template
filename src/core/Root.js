import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';
import DevTools from './DevTools';

const renderDevTools = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return <DevTools />;
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {renderDevTools()}
    </div>
  </Provider>
);

Root.propTypes = {
  store: Provider.propTypes.store,
  history: Router.propTypes.history,
};

export default Root;

