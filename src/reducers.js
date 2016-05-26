import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './containers/App/reducer';

export default combineReducers({
  app: appReducer,
  routing: routerReducer,
});

