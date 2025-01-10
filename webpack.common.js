const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/entry/index/index.js',
    details: './src/entry/details/details.js',
  },
  output: {
    publicPath: '',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* style and css loader */
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  /* plugins */
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './src/entry/details/details.html',
      filename: 'details.html',
      chunks: ['details'],
    }),
    new HtmlWebpackPlugin({
      template: './src/entry/index/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
  ],
};
