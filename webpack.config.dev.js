'use strict';

const common = require('./webpack.common')
const webpack = require("webpack");

//common.entry = "./src/index.tsx";
/*
common.externals = {
    "react": "React",
    "react-dom": "ReactDOM"
};
*/

common.plugins = [
    new webpack.optimize.CommonsChunkPlugin('vendor', './dist/vendor.js', Infinity)
];

// Enable sourcemaps for debugging webpack's output.
common.devtool = "source-map";

common.module.preLoaders = [
    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { test: /\.js$/, loader: "source-map-loader" }
];

module.exports = common;