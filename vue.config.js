// vue.config.js
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  productionSourceMap: false,
  
  configureWebpack: () => {
    return {
      
      optimization: {
        splitChunks: {
          minSize: 100000,
          maxSize: 500000,
        },
        mergeDuplicateChunks: true,
      },    
      plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ],
      resolve: {
        fallback: {
          assert: require.resolve("assert"),
          buffer: require.resolve("buffer"),
          stream: require.resolve("stream-browserify"),
          http: require.resolve("stream-http"),
          os: require.resolve("os-browserify/browser"),
          https: require.resolve("https-browserify"),
          crypto: require.resolve("crypto-browserify"),
          Buffer: require.resolve("buffer"),
        },
        alias: {},
      },
    };
  },
};
