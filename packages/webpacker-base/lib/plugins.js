module.exports = (path) => {
  return [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path
    })
  ]
}