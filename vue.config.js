module.exports = {
    // outputDir: 'dist',   //build输出目录
    // assetsDir: 'assets', //静态资源目录（js, css, img）
    // lintOnSave: false, //是否开启eslint
    // dev: {
    // open: true, //是否自动弹出浏览器页面
    // host: "localhost", 
    // port: '8081', 
    // https: false,   //是否使用https协议
    // hotOnly: false, //是否开启热更新
    // 设置代理
    //     proxyTable: {
    //         '/apis': {
    //             target: 'http://localhost:3000/', //API服务器的地址
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/apis': ''
    //             }
    //         }
    //     },
    // }
    devServer: {
        // disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}
