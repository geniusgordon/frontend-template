/* eslint-env mocha */
import { expect } from 'chai';
import { put } from 'redux-saga/effects';
import { counter } from '../index';
import { increment } from '../../containers/App/actions';

describe('Sagas', () => {
  it('should dispatch an increment action', () => {
    const gen = counter();
    gen.next();
    expect(gen.next().value).to.deep.equal(put(increment(1)));
  });
});

