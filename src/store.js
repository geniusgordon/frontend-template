import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import DevTools from './DevTools';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history) {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      ),
      DevTools.instrument()
    )
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

