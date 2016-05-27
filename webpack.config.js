var path = require('path');
var webpack = require('webpack');

const config = {
  entry: {
    'index': './src/index.js',
  },
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
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ];
}

module.exports = config;
