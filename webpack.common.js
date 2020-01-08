const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    entry: {
        home: './src/js/00_root/home.js',
        allBlogs: './src/js/00_root/allBlogs.js'
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }  
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            //waypoints: './node_modules/waypoints'
        })
    ]
}