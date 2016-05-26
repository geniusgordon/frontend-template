import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducers';
import DevTools from './DevTools';

export default function configureStore(history) {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(routerMiddleware(history)),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

