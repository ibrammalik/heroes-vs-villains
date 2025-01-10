const path = require('path');
const { merge } = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      /* babel loader */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  // plugins
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      navigateFallback: '/details.html',
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/icon.png',
      inject: (htmlPlugin) => path.basename(htmlPlugin.options.filename),
      favicons: {
        appName: 'SuperHero.',
        appDescription: 'PWA For Search Your Superhero!!',
        developerName: 'Maulana Malik Ibrahim',
        developerURL: 'github.com/ibrammalik',
        background: '#ddd',
        theme_color: '#333',
        start_url: '/',
      },
    }),
  ],
});
