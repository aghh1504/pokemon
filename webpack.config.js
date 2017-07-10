module.exports = {
    entry: ["whatwg-fetch", "./js/index.jsx"],
    output: {
      filename: "out.js"
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ["es2015", 'stage-2', "react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ],
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            }
        ],
    }
}
