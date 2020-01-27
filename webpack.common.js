const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin =require('mini-css-extract-plugin');


module.exports = {
    entry: {
        home: ['./src/js/00_entry/pageHome.js', './src/js/00_entry/tempHeader.js', './src/js/00_entry/tempFooter.js'],
        allBlogs: ['./src/js/00_entry/pageAllBlogs.js', './src/js/00_entry/tempHeader.js', './src/js/00_entry/tempFooter.js']
    },
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {interpolate: true}
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.(css|s[ac]ss)$/,
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
        })
    ]
}