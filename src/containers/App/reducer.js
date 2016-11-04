import { handleActions } from 'redux-actions';
import { MESSAGE, INCREMENT } from './actionTypes';

const initialState = {
  count: 0,
  message: 'Hello, World!',
};

const reducer = handleActions({
  [MESSAGE]: (state, action) => ({
    ...state,
    message: action.payload,
  }),
  [INCREMENT]: (state, action) => ({
    ...state,
    count: state.count + action.payload,
  }),
}, initialState);

export default reducer;

