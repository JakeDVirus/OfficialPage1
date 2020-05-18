const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const htmlWebPackPlugin = require('html-webpack-plugin');


 
module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/htmlPages/index.html",
            chunks: ['home']
        }),
        new htmlWebPackPlugin({
            filename: "blogs_all.html",
            template: "./src/htmlPages/blogs_all.html",
            chunks: ['allBlogs']
        }),
        new htmlWebPackPlugin({
            filename: "blog1.html",
            template: "./src/htmlPages/blogs/blog1.html",
            chunks: ['blog1']
        })
    ],
    devtool: "source-map"
    

}) //end of module.export