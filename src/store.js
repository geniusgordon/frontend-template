import { createStore, compose } from 'redux';
import reducer from './reducers';
import DevTools from './DevTools';

export default function configureStore() {
  const store = createStore(
    reducer,
    compose(DevTools.instrument())
  );
  return store;
}

