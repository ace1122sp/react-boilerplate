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
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                exportLocalsConvention: 'dashes',
              },
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
