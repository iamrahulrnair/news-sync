const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './static/icons/favicon.ico',
      hash: true,
    }),
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        newsBox: 'newsBox@http://localhost:8081/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
