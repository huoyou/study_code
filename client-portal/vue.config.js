const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

module.exports = {
  transpileDependencies: ['webpack-dev-server/client'],
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,

  chainWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']
    // 修复HMR
    config.resolve.symlinks(true)
    // 修复 Lazy loading routes Error
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
    // 打包分析
    if (process.env.IS_ANALYZ) {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerMode: 'static'
        }])
    }
  },
  configureWebpack: config => {
    if (IS_PROD) {
      const plugins = []
      // 开启 gzip 压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )

      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false

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
