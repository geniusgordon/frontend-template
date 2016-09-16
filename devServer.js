var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}).listen(port, host, (err) => {
  if(err) {
    throw err;
  }
  console.log(`Dev server start : http://${host}:${port}`); // eslint-disable-line no-console
});

