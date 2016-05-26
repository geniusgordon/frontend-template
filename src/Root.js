import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PageOne from './containers/PageOne';
import DevTools from './DevTools';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} >
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="page" component={PageOne} />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Root;

