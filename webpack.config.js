// See: http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
var node_dir = __dirname + '/node_modules';
var bower_dir = __dirname + '/bower_components';
var path = require('path');
var webpack = require('webpack');
var config = {
    debug: true,
    entry: ['./entry.js'],
    resolve: {
        alias: {
            'jquery': bower_dir + '/jquery',
            'underscore': bower_dir + '/underscore',
            'backbone': bower_dir + '/backbone'
        }
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    module: {
        noParse: [],
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' },
            { test: /\.html/, loader: 'html' }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin([
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ]) 
    ]
};


module.exports = config;
