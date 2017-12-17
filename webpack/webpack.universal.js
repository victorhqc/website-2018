module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-3',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
      {
        loader: 'eslint-loader',
      },
    ],
  },
};