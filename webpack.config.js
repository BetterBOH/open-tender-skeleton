const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: 'index.js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    jsonpFunction: 'openTenderSkeleton',
    library: 'lib',
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
};
