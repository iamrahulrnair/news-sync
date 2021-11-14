const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('../package.json');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:8080/',
    uniqueName: 'container',
  },
  plugins: [
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        newsbox: 'newsbox@http://localhost:8081/remoteEntry.js',
        auth: 'auth@http://localhost:8082/remoteEntry.js',
        reachme: 'reachme@http://localhost:8083/remoteEntry.js',
      },
      shared: packageJSON.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
