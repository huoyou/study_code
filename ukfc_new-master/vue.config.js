const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const os = require('os');
//const skeleton = require('./skeleton.js');

//const dev_v2_u = 'http://161.117.86.185:8080';

/*
  创建骨架屏命令
  第一步，执行命令：webpack --config ./webpack.skeleton.conf.js
  第二步，执行命令： node skeleton.js
 */

/*let apis = ['/lang', '/register', '/login', '/user/info'];
let obj = {};
let apiProxy = {
  target: dev_v2_u,
  // secure: false,  // 如果是https接口，需要配置这个参数
  // 如果接口跨域，需要进行这个参数配置
  changeOrigin: true
};
apis.forEach(item => {
  obj[item] = apiProxy;
});*/

module.exports = {
  outputDir: 'web', // 打包输出路径
  publicPath: './',
  productionSourceMap: false, // 上线产品不生成source map
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'sit' || process.env.NODE_ENV === 'sit_green') {
      // 去除console.log
      let removeConsole = new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true,
            pure_funcs: ['console.log']
          }
        },
        parallel: os.cpus().length * 2
      });
      // 打包web文件夹 ---------- 已放到zipFile.js中去打包
       let fileManager = new FileManagerPlugin({
         onEnd: {
           /*copy: [
             { source: 'public/version.js', destination: 'web' },
           ],*/
           archive: [
             {
               source: 'web',
               destination: 'web.zip',
               format: 'zip',
             }
           ]
         }
       });

      config.plugins.push(removeConsole);
      config.plugins.push(fileManager);
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    // 自动打开浏览器
    open: true,
    //host: '0.0.0.0',
    port: 8091,
    https: false,
    // TIP 修复热更新失效问题
    hot: true,
    inline: true,
    hotOnly: false,
    // 设置代理
    /*proxy: {
      // 接口地址为"/v2/xxx/yyy"的所有请求都会走这个代理

      // '/v2/!*': {
      //   target: dev,
      //   // secure: false,  // 如果是https接口，需要配置这个参数
      //   // 如果接口跨域，需要进行这个参数配置
      //   changeOrigin: true
      // },

      '/register': {
        target: dev_v2_u,
        // secure: false,  // 如果是https接口，需要配置这个参数
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true
      },
    }*/
    /*proxy: obj*/
    proxy: {
      '/v2/w/*': {
        target: 'http://161.117.86.185:8080',
        // secure: false,  // 如果是https接口，需要配置这个参数
        // 如果接口跨域，需要进行这个参数配置
        changeOrigin: true
      }
    }
  }
};
