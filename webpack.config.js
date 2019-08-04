const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is ${mode}`);
  return {
    mode,
    devServer: {
      open: true
    },
    entry: './src/index.js',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
        rules: [
         {
          test: /\.jpe?g|png$/,
          exclude: /node_modules/,
          loader: ["url-loader", "file-loader"]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test:/\.css$/,
          exclude: /node_modules/,
          use:['style-loader','css-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
    ],
  };
};
