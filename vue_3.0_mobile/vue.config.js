const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    outputDir: 'dist', // 打包输出路径
    productionSourceMap: false, // 上线产品不生成source map
    chainWebpack: config => {
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
    },
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