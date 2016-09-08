const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './index.jsx',
  output: {
    path: './',
    publicPath: '/',
    filename: 'bundle.index.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.jsx?$/,
    //     exclude: /src\//,
    //     loader: 'source-map'
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
    ]
  },
  plugins: ([
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
  ]).concat(ENV==='production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ] : []),
  // devtool: ENV==='production' ? 'source-map' : 'inline-source-map',
};
