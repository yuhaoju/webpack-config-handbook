const path = require('path');
const webpack = require('webpack');

const dllAssetPath = path.join(__dirname, 'dll');
const dllLibraryName = '[name]';

module.exports = {
  entry: ['react'],
  output: {
    path: dllAssetPath,
    filename: 'vendor@[chunkhash].js',
    library: dllLibraryName,
  },
  plugins: [
    new webpack.DllPlugin({
      name: dllLibraryName,
      path: path.join(dllAssetPath, 'manifest.json'),
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  mode: 'production',
};
