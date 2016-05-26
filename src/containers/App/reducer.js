import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = fromJS({
  count: 0,
  message: 'Hello, World!',
});

const reducer = handleActions({
  MESSAGE: (state, action) => (
    state.set('message', action.payload)
  ),
  INCREMENT: (state, action) => (
    state.set('count', state.get('count') + action.payload)
  ),
}, initialState);

export default reducer;

