const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
const cdn = {
    css: [],
    js: [
        'https://xxx-cdn-path/vue.runtime.min.js',
        'https://xxx-cdn-path/vue-router.min.js',
        'https://xxx-cdn-path/vuex.min.js',
        'https://xxx-cdn-path/axios.min.js',
    ]
}
module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包输出路径
    chainWebpack: config => {
        // 引入babel-polyfill
        config
            .entry('index')
            .add('babel-polyfill')
            .end();
        // 配置别名
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('_c', resolve('src/components'))
            .set('_assets', resolve('src/assets'))
        // 压缩图片
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
        // 移除 prefetch 插件
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'sit' || process.env.NODE_ENV === 'sit_green') {
            // 去除console.log
            let removeConsole = new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    }
                },
                sourceMap: false,
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
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            }
            config.plugins.push(removeConsole);
            config.plugins.push(fileManager);
        } else {
            // 为开发环境修改配置...
        }
    },
    // 上线产品不生成source map
    productionSourceMap: false,
    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: require('os').cpus().length > 1,
    //前端代理
    devServer: {
        open: true, // 自动打开浏览器
        //host: '0.0.0.0',
        port: 8091,
        https: false,
        // TIP 修复热更新失效问题
        hot: true,
        inline: true,
        hotOnly: false,
        proxy: {
            '/v2/w/*': {
                target: 'http://161.117.86.185:8080',
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true // 如果接口跨域，需要进行这个参数配置
            }
        }
    }
}