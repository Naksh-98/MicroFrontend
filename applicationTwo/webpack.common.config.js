
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = {
    mode: "development",
    entry: './index.tsx',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true // clean the dist folder whenevr the new dev build occurs
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
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

                },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
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
            name: 'productsApp',
            filename: 'remoteEntry.js',
            exposes: {
                "./ProductsList": "./src/features/product/ProductsList",
                "./StoreProvider": "./src/app/store",
                "./mainCss": "./src/css/main.scss",
                "./Exposes": "./src/export/ProductExposes",
                "./CartExposes": "./src/export/CartExposes",
                "./NavigationRout": "./src/routing/navigationContext",
                "./CompareProducts": "./src/features/product/CompareProducts"
                // "./AsidePicker": "./src/export/AsidePicker",
            },
            shared: {
                react: {
                    singleton: true,
                    // requiredVersion: '19.2.0'
                },
                'react-dom': {
                    singleton: true,
                    // requiredVersion: '19.2.0'
                }
            }
        })
    ],
};