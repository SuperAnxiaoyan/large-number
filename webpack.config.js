
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'none',//先将所有得压缩与不压缩默认值都去掉
    entry: {
        'large-number': './src/index.js',
        "large-number.min": "./src/index.js"
    },
    output: {
        filename: '[name].js',
        library: 'largeNumer',//打包库得名字
        libraryTarget: 'umd',//通过什么方式引入
        libraryExport: 'default',//largeTarget.default方式引入这个库
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                parallel: true,
            })
        ]
    }


}