const deepCopy = require('./deepCopy')

module.exports = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }