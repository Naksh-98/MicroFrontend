const path = require('path');
const { merge } = require('webpack-merge')

const common = require('../mainhost/webpack.common.config')
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
        port: 8000,
        hot: true,
        open: {
            app: {
                name: 'comet'
            }
        },
        compress: true,
        historyApiFallback: true
    },
    
}) 