const path = require('path');
const dotenv = require('dotenv');
const nodeExternal = require('webpack-node-externals');

dotenv.config();

const mode = process.env.NODE_ENV ?? 'production';
const isDev = process.env.NODE_ENV !== 'production';
console.log("env servidor", process.env.NODE_ENV);

module.exports = {
  name: 'server',
  entry: './src/server/index.ts',
  mode,
  target: 'node', //Cuando traspilamos código de backend
  stats: 'errors-only',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "swc-loader", //es como babel
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                minify: !isDev,
              }
            }
          }
        },
        exclude: /node_modules/,
      },
    ]
  },
  externals: [nodeExternal()],//Ayuda a ignorar los node_modules
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};