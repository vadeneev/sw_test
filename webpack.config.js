const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/script/index.jsx',

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
                test: /\.js$/,
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
                to: './workers',
                toType: 'dir'
            }
        ]),
    ],
}