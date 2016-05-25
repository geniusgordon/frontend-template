import { expect } from 'chai';
import appReducer from '../reducer';
import { message } from '../actions';
import { fromJS } from 'immutable';

describe('App reducer', () => {
  it('should state message of state', () => {
    const state = undefined;
    const action = message('123');
    const nextState = appReducer(state, action);
    expect(nextState.toJS()).to.deep.equal({
      message: '123',
    });
  });
});

