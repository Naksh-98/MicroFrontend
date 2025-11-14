const path = require('path');
const { merge } = require('webpack-merge')

const common = require('../applicationTwo/webpack.common.config')
module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            writeToDisk: true  // Forces writing files to disk
        },
        port: 9001,
        hot: true,
        open: {
            app: {
                name: 'comet'
            }
        },
        compress: true,
        historyApiFallback: true,
    },

}) 