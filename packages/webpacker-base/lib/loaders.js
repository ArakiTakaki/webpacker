
module.exports = (isSourceMap, sassResourcePathList) => {
  return [
    {
      test: /\.pug$/,
      use: [{
        loader: "pug-loader"
      }]
    },
    {
      test: /\.(sass|scss)$/,
      use: [{
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: isSourceMap,
            modules: true
          }
        },
        {
          loader: "postcss-loader",
          options: {
            sourceMap: isSourceMap,
            plugins: [require("autoprefixer")({grid: true})]
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: isSourceMap
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            sourceMap: isSourceMap,
            resources: sassResourcePath
          }
        }
      ]
    }
  ]
}