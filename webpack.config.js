var path = require('path');

module.exports = {
  entry: {
    'index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }],
    preLoaders: [{
      test: /\.js$|\.jsx$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  },
}

