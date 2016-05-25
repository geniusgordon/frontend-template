import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = fromJS({
  message: 'Hello, World!',
});

const reducer = handleActions({
  MESSAGE: (state, action) => (
    state.set('message', action.payload)
  ),
}, initialState);

export default reducer;

