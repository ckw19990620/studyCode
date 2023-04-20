const util = require('util');
const fs = require('fs');
let readFile = util.promisify(fs.readFile)
readFile('').then(res => {
    console.log(res);
})
