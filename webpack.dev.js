const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const htmlWebPackPlugin = require('html-webpack-plugin');


 
module.exports = merge(common, {
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  //3. Inject styles to DOM
                    'css-loader',    //2. Turns css into commonJS
                    'sass-loader'    //1. Turns sass into css
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