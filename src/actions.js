import { push } from 'react-router-redux';

import * as app from './containers/App/actions';
export { app };

export const routing = {
  push(path) {
    return push(path);
  },
};

