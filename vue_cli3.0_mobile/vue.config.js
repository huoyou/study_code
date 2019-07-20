const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const os = require('os');
var FStream = require('fs');
const path = require('path');
const merge = require('webpack-merge');                        // ts用
const tsImportPluginFactory = require('ts-import-plugin');     // ts用
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const resolve = dir => {
    return path.join(__dirname, dir)
};

const isProduction = process.env.NODE_ENV === 'production';
const useCdn = false;
const outputDirName = 'dist';
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
    outputDir: outputDirName, // 打包输出路径
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
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
            .set('_common', resolve('src/common'))
        // 压缩图片
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({
                bypassOnDebug: true
            })
            .end()
        // TS-Loader配置
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                style: true
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
        // 生产环境配置
        // if (isProduction) {
        //     // 删除预加载,移除 prefetch 插件
        //     config.plugins.delete('preload');
        //     config.plugins.delete('prefetch');
        //     // 压缩代码
        //     config.optimization.minimize(true);
        //     // 分割代码
        //     config.optimization.splitChunks({
        //         chunks: 'all'
        //     })
        //     // 生产环境注入cdn
        //     config.plugin('html')
        //         .tap(args => {
        //             args[0].cdn = cdn;
        //             return args;
        //         });
        // }
    },
    configureWebpack: config => {
        if (isProduction) {
            // 去除console.log
            let removeConsole = new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
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
                            source: outputDirName,
                            destination: `${outputDirName}.zip`,
                            format: 'zip',
                        }
                    ]
                }
            });
            // 打包分析
            let BundleAnalyzer = new BundleAnalyzerPlugin({})
            // config.externals = {
            //     'vue': 'Vue',
            //     'vuex': 'Vuex',
            //     'vue-router': 'VueRouter',
            //     'axios': 'axios'
            // }
            config.plugins.push(removeConsole);
            config.plugins.push(fileManager);
            config.plugins.push(BundleAnalyzer);
        } else {
            // 为开发环境修改配置...
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                @import "@/common/css/mixin.scss";
                @import "@/common/css/_var.scss";
                `
            }
        }
    },
    // 上线产品不生成source map
    productionSourceMap: false,
    //是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    parallel: os.cpus().length > 1,
    //前端代理
    devServer: {
        open: false, // 自动打开浏览器
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