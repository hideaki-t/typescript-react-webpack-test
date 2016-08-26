'use strict';

const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: ['react-dom', 'react']
    },
    output: {
        filename: "./dist/bundle.js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};
