const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //optimize/minimize css plugin
var TerserPlugin = require("terser-webpack-plugin"); //minimize javascript plugin
const htmlWebPackPlugin = require('html-webpack-plugin');

// for `minify` of htmlWebpackPlugin
const configurationObject1 = {    
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true
}


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), 
            new TerserPlugin,
            new htmlWebPackPlugin({
                template: "./src/htmlPages/index.html",
                chunks: ['home'],
                minify: configurationObject1 //its a variable
            }),
            new htmlWebPackPlugin({
                filename: "blogs_all.html",
                template: "./src/htmlPages/blogs_all.html",
                chunks: ['allBlogs'],
                minify: configurationObject1 //its a variable
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