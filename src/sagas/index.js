import { delay } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { increment } from '../containers/App/actions';

export function* counter() {
  while (true) { // eslint-disable-line no-constant-condition
    yield delay(1000);
    yield put(increment(1));
  }
}

export default function* rootSaga() {
  yield fork(counter);
}

