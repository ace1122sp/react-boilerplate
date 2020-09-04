const path = require('path');

module.exports = {
  resolve: {
    alias: {
      client: path.resolve(__dirname, 'client'),
    },
  },
  context: path.resolve(__dirname, 'client'),
  entry: [
    'regenerator-runtime/runtime',
    path.resolve(__dirname, 'client', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
                exportLocalsConvention: 'dashes',
              },
            },
          },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
