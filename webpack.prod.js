const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require("terser-webpack-plugin"); 
const htmlWebPackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin,
            new htmlWebPackPlugin({
                template: "./src/index.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,  //3. Extract css into files
                    {
                        loader: 'css-loader', //2. Turns css into commonJS
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'sass-loader', //1. Turns sass into css
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
        })
    ]

});//end of module.export