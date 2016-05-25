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

