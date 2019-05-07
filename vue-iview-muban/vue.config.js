const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const resolve = dir => {
  return path.join(__dirname, dir)
}
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);


module.exports = {
  publicPath: './',
  assetsDir: 'static',
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  },
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = [];
      plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']//移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
      config.plugins = [
        ...config.plugins,
        ...plugins
      ];
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 8000,
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     '/api': {
  //       target: 'http://127.0.0.1:8080',
  //       changeOrigin: true
  //     }
  //   }
  // }
}
