var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');


const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: [
        PATHS.app,
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: PATHS.app
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: PATHS.app
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'node_modules/html-webpack-template/index.html',
            title: 'Kanban app',
            appMountId: 'app'
        })
    ]
}

if(TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            stats: 'errors-only',

            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}

if(TARGET === 'build') {
    module.exports = merge(common, {})
}






