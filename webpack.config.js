module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'window',
    library: 'dwebxServeResolvePath',
    path: __dirname,
    filename: 'dist.js'
  }
};