const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const vConsolePlugin = require('vconsole-webpack-plugin');

const os = require('os');
var FStream = require('fs');
const path = require('path');
const merge = require('webpack-merge');                        // ts用
const tsImportPluginFactory = require('ts-import-plugin');     // ts用

const resolve = dir => {
    return path.join(__dirname, dir)
};

const isProduction = process.env.NODE_ENV === 'production';
const outputName = 'dist';
const cdn = {
    css: [
        //   'https://unpkg.com/element-ui/lib/theme-chalk/index.css' // element-ui css
    ],
    js: [
        'https://cdn.staticfile.org/vue/2.5.22/vue.min.js',
        'https://cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
        'https://cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
        'https://cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
        //   'https://unpkg.com/element-ui/lib/index.js' // element-ui js
    ]
}
const useCdn = false;

module.exports = {
    publicPath: './',
    outputDir: outputName, // 打包输出路径
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
        if (isProduction) {
            // 压缩图片
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    bypassOnDebug: true
                })
                .end()
            // 删除预加载,移除 prefetch 插件
            // config.plugins.delete('preload');
            // config.plugins.delete('prefetch');
            // 压缩代码
            config.optimization.minimize(true);  
            // 分割代码
            config.optimization.splitChunks({
                chunks: 'all'
            })

            // 生产环境注入cdn
            var externals = {
                'vue': 'Vue',
                'axios': 'axios',
                'vue-router': 'VueRouter',
                'vuex': 'Vuex'
            }
            config.externals(externals)
            config.plugin('html')
                .tap(args => {
                    args[0].cdn = cdn
                    return args
                })
        }

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
                            source: outputName,
                            destination: `${outputName}.zip`,
                            format: 'zip',
                        }
                    ]
                }
            });
            // zip压缩
            let Compression = new CompressionPlugin({
                filename: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                threshold: 8192,
                minRatio: 0.8,
            });
            // 打包分析
            let BundleAnalyzer = new BundleAnalyzerPlugin();

            if (process.env.IS_ANALYZE) {
                config.plugins = [...config.plugins, removeConsole, fileManager, Compression, BundleAnalyzer];
            } else {
                config.plugins = [...config.plugins, removeConsole, fileManager, Compression];
            }
        } else {
            // 为开发环境修改配置...
            let pluginsDev = [
                //移动端模拟开发者工具
                new vConsolePlugin({
                    filter: [], // 需要过滤的入口文件
                    enable: true
                }),
            ];
            config.plugins = [...config.plugins, ...pluginsDev];
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