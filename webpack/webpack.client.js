const path = require('path');
const merge = require('webpack-merge');
const universalConfig = require('./webpack.universal.js');

const {
  getFilename,
} = require('./utils');

const config = {
  // Tell webpack the root file of our server application.
  entry: './src/client',

  // Tell webpack where to put the output file that is generated.
  output: {
    filename: getFilename(),
    path: path.resolve(__dirname, '../public'),
  },
};

module.exports = merge(universalConfig, config);
