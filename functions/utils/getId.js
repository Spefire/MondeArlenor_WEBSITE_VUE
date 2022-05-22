/* eslint-disable no-useless-escape */
module.exports = function getId(urlPath) {
  return urlPath.match(/([^\/]*)\/*$/)[0];
};