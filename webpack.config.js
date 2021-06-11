'use stricts'

const path = require('path');

const DEV = 'development';
const PROD = 'production';

const { NODE_ENV = DEV } = process.env;

const isProd = NODE_ENV === PROD;

module.exports = {
    entry: {
        app: './src/index.js'
    },
    mode: isProd ? PROD : DEV,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/build')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        inline: true,
        port: 8088,
        progress: true
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
        }]
    }
};