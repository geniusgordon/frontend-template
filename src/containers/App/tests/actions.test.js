/* eslint-env mocha */
import { expect } from 'chai';
import { message } from '../actions';

describe('App actions', () => {
  it('should return a action with message payload', () => {
    expect(message('123')).to.deep.equal({
      type: 'MESSAGE',
      payload: '123',
    });
  });
});

