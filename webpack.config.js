'use strict';

const common = require('./webpack.common')
const webpack = require("webpack");

common.plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.js', Infinity),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        output: {
            comments: require('uglify-save-license')
        }
    })
];

module.exports = common;
