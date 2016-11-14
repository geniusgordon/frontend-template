import reducer from '../reducer';
import { message, increment } from '../actions';

describe('app reducer', () => {
  it('set new message', () => {
    const state = {};
    const newState = reducer(state, message('test'));
    expect(newState.message).toBe('test');
  });

  it('increment counter', () => {
    const state = { count: 1 };
    const newState = reducer(state, increment(1));
    expect(newState.count).toBe(2);
  });
});

