/* eslint-env mocha */
import { expect } from 'chai';
import appReducer from '../reducer';
import { message, increment } from '../actions';

describe('App reducer', () => {
  it('should state message of state', () => {
    const state = undefined;
    const action = message('123');
    const nextState = appReducer(state, action);
    expect(nextState.toJS().message).to.equal('123');
  });

  it('should increase counter', () => {
    const state = undefined;
    const action = increment(1);
    const nextState = appReducer(state, action);
    expect(nextState.toJS().count).to.equal(1);
  });
});

