const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/script/index.js',

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "")
        ],
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, "public")),
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, "src/index.html"),
        }),
        new CopyWebpackPlugin([
            {
                from: './src/script/workers',
                to: './',
                toType: 'dir'
            }
        ]),
    ],

    devtool: "source-map",

    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        //hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
    },
}