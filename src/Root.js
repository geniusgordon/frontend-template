import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';
import App from './containers/App';
import DevTools from './DevTools';

const rootRoute = {
  component: App,
  childRoutes: routes,
};

const renderDevTools = () => {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  return <DevTools />;
};

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={rootRoute} />
      {renderDevTools()}
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;

