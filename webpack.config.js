var path = require('path');
var webpack = require('webpack');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'static'),
    publicPath: '/static/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['babel', 'eslint'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?modules&camelCase', 'postcss'],
      include: path.join(__dirname, 'src')
    }]
  },
  postcss: function() {
    return [require('autoprefixer'), require('precss')];
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'window.API_URL': JSON.stringify(process.env.API_URL),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]);
} else {
  config.entry = config.entry.concat([
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
  ]),
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
}

module.exports = config;

