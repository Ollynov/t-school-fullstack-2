const path = require('path');
const sourcePath = path.resolve(__dirname, 'source');
const publicPath = path.resolve(__dirname, 'public');

module.exports = {
    target: 'web',
    entry: "./source/index.js",
    output: {
        path: publicPath,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          path.join(__dirname, 'node_modules')
        ]
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules\/)/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
};