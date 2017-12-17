const getFilename = () => `bundle${process.env.production === '' : '.dev'}.js`;

module.exports = {
  getFilename,
};
