const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node', // 这里必须是node，因为打包完成的运行环境是node
  entry: path.join(__dirname, './src/skeleton.entry.js'),
  output: {
    path: path.join(__dirname, './skeleton_dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      /*{
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },*/
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  /*externals: Object.keys(require('../package.json').dependencies),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]*/
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    new VueLoaderPlugin(),
    new VueSSRServerPlugin({
      filename: 'skeleton.json'
    })
  ]
}
