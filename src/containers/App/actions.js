import { createAction } from 'redux-actions';
import { MESSAGE, INCREMENT } from './actionTypes';

export const message = createAction(MESSAGE);
export const increment = createAction(INCREMENT);

