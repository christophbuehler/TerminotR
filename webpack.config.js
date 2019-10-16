module.exports = [{
  entry: './src/main.ts',
  output: {
    filename: 'terminotr.min.js',
    library: 'terminotr',
    libraryExport: 'default',
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
    }],
  },
}];