const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const htmlWebPackPlugin = require('html-webpack-plugin');


 
module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  //3. Inject styles to DOM
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
        new htmlWebPackPlugin({
            template: "./src/index.html",
        })
    ]

}) //end of module.export