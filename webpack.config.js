const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin =require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },  
        ]
    },

    // optimization : {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendor',
    //                 chunks: "all"
    //             }
    //         }
    //     }
    // },

    plugins: [
        new webpack.ProvidePlugin({
            waypoints: './node_modules/waypoints'
        }),
        new htmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new miniCssExtractPlugin({
            //options similar to the same options in webpackOptions.output
            //both options are optional
            filename: "[name].css",
            chunkFilename: '[id].css'
        })
    ]
}