const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'index.jsx'),
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
