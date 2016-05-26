/* eslint-disable global-require */
function loadModule(callback) {
  return (componentModule) => {
    callback(null, componentModule.default);
  };
}

const routes = [{
  path: '/',
  getComponent(nextState, callback) {
    require(['./containers/HomePage'], loadModule(callback));
  },
}, {
  path: '/page',
  getComponent(nextState, callback) {
    require(['./containers/PageOne'], loadModule(callback));
  },
}];

export default routes;

