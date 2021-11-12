const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('../package.json');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
    uniqueName: 'news-box',
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'newsbox',
      filename: 'remoteEntry.js',
      exposes: {
        './NewsBoxApp': './src/bootstrap',
      },
      shared: packageJSON.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
