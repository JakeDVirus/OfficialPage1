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
        })
    ]

}) //end of module.export