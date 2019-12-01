const htmlWebPackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin =require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },  
        ]
    },
    plugins: [
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