// vue.config.js
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  productionSourceMap: false,
  
  configureWebpack: () => {
    return {
      rules: [{
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }],
      optimization: {
        splitChunks: {
          minSize: 100000,
          maxSize: 500000,
        }
      },    
      plugins: [
        new BundleAnalyzerPlugin(),
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
