const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('../package.json');

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
    new moduleFederationPlugin({
      name: 'container',
      remotes: {
        newsBox: 'newsBox@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJSON.dependencies,
    }),
  ],
};
module.exports = merge(commonConfig, devConfig);
