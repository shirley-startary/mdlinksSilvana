const {readFileToString} = require('./readFileToString.js');
const {extractLinks} = require('./linksExtractor.js');

module.exports.mdlinks = (path, options) => {
  return new Promise((resolve, reject)=> {
    readFileToString(path)
    .then((res) => {
      return extractLinks(res, path)
    })
    .then(data => {
      resolve(data)
    })
    .catch(reject)
  })  
}