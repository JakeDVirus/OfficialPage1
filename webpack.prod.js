const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
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
                template: "./src/html/htmlPages/index.html",
                chunks: ['home'],
                minify: configurationObject1 //its a variable
            }),
            new htmlWebPackPlugin({
                filename: "blogs_all.html",
                template: "./src/html/htmlPages/blogs_all.html",
                chunks: ['allBlogs'],
                minify: configurationObject1 //its a variable
            }),
            new htmlWebPackPlugin({
                filename: "blog1.html",
                template: "./src/html/htmlPages/blogs/blog1.html",
                chunks: ['blog1'],
                minify: configurationObject1 //its a variable
            })
        ]
    }

});//end of module.export