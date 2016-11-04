import test from 'ava';
import reducer from '../reducer';
import { message, increment } from '../actions';

test('message', (t) => {
  const state = {};
  const newState = reducer(state, message('test'));
  t.is(newState.message, 'test');
});

test('increment', (t) => {
  const state = { count: 1 };
  const newState = reducer(state, increment(1));
  t.is(newState.count, 2);
});

