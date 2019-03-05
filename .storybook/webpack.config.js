const webpack = require('webpack');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.png$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      MOCK_ENV: JSON.stringify(true)
    })
  ]
};
