/* eslint-disable global-require, import/no-dynamic-require */
function loadModule(callback) {
  return (componentModule) => {
    callback(null, componentModule.default);
  };
}

const routes = {
  path: '/',
  getComponent(nextState, callback) {
    require(['../containers/App'], loadModule(callback));
  },
  indexRoute: {
    getComponent(nextState, callback) {
      require(['../containers/HomePage'], loadModule(callback));
    },
  },
  childRoutes: [{
    path: '/page',
    getComponent(nextState, callback) {
      require(['../containers/PageOne'], loadModule(callback));
    },
  }],
};

export default routes;

