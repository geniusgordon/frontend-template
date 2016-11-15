# frontend-template [![Build Status](https://travis-ci.org/geniusgordon/frontend-template.svg?branch=master)](https://travis-ci.org/geniusgordon/frontend-template)


## Getting Started

```sh
git clone https://github.com/geniusgordon/frontend-template
cd frontend-template
yarn # install dependencies
```

### Run in development

uses webpack-dev-server

```sh
yarn run dev 
```

### Run in production

```sh
NODE_ENV=production
yarn run build
yarn start
```

## What’s Inside?

* [webpack](https://webpack.github.io/) with webpack-dev-server and [style-loader](https://github.com/webpack/style-loader)
* [Babel](http://babeljs.io/) with babel-preset-latest and babel-preset-stage-0
* [PostCSS](https://github.com/postcss/postcss) with [autoprefixer](https://github.com/postcss/autoprefixer)
* [ESlint](http://eslint.org/) with [airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
* [Stylelint](https://github.com/stylelint/stylelint)
* [Jest](http://facebook.github.io/jest/)
* [react-router](https://github.com/ReactTraining/react-router)
* [redux](http://redux.js.org/)
* [redux-saga](http://yelouafi.github.io/redux-saga/)
* [redux-actions](https://github.com/acdlite/redux-actions)
* [redux-devtools](https://github.com/gaearon/redux-devtools)

## Structure

[the ducks file structure](https://github.com/erikras/ducks-modular-redux)

```
frontend-template/src/
  containers/
    ContainerName/
      actions.js
      actionTypes.js
      index.js
      reducer.js
      style.css
      tests/
        reducer.test.js                                                                                                              
    core/
      actions.js
      api.js
      DevTools.js
      reducers.js
      Root.js
      store.js
    index.js
    routes/
    sagas/
```
