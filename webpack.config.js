/**
 * Created by jeff on 2017/3/22.
 */
var path = require('path');
var webpack = require('webpack');
var InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin');

module.exports = {
    entry: [
        './src/js/main.js',
        './node_modules/jquery/dist/jquery.min.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}