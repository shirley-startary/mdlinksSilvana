const extractLinks = (fileString, path) => {
  return new Promise((resolve, reject) => {
    if (typeof fileString !==  'string') {
      reject("Dato incorrecto");
    }

    const rexgex = /\[(.*?)\]\((.*?)\)/gm;
    const linksArrayMatched = fileString.match(rexgex);
    // console.log(linksArrayMatched);
    const arrayObject = linksArrayMatched.map((item) => {
      const objLink = {
        text: item.slice(1,item.indexOf(']')),
        href: item.slice(item.indexOf('(') + 1,item.indexOf(')')),
        path,
      }
      return objLink
    })
    
    resolve(arrayObject)

  })
}

module.exports.extractLinks = extractLinks

