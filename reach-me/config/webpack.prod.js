const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

// const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/reachme/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reachme',
      filename: 'remoteEntry.js',
      exposes: {
        './reachmeApp': './src/bootstrap',
      },
      shared: packageJSON.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);
