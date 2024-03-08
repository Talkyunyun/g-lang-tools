const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require("ts-loader");

const PORT = 9091;
const HOST = 'localhost';
const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    mode: "development",
    entry: './test/main.ts',
    output: {
        path: ROOT_PATH + "/dist",
        filename: 'js/[name].[hash:7].js'
    },
    resolve: {extensions: [".ts", ".js"]},
    devServer: {open: true, host: HOST, port: PORT},
    plugins: [
        new HtmlWebpackPlugin({
            template: ROOT_PATH + '/test/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node-module/,
                use: "ts-loader",
            }
        ]
    }
}
