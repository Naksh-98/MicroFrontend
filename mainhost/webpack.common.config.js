
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
    mode: "development",
    entry: './index.js',
    output: {
        filename: 'mainhost.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true // clean the dist folder whenevr the new dev build occurs
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }

                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource'
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new ModuleFederationPlugin({
            name: "mainhost",
            remotes: {
                "productsApp": "productsApp@http://localhost:9001/remoteEntry.js"
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '19.2.0'
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '19.2.0'
                },
            }
        })

    ],
};