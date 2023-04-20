const fs = require('node:fs/promises');
const Path = require('node:path');
let imgPath = Path.resolve('D:\\Media\\壁纸\\2_Ceremonial5_4k.jpg');
console.log(imgPath);
let targetPath = Path.resolve(__dirname, './haha.jpg')
console.log(targetPath);
// fs.readFile(imgPath).then(buffer => {
//   return fs.appendFile(targetPath, buffer)
// }).then(value => {
//   console.log('结束');
// })

// fs.mkdir('./newdir')
//   .then(r => {
//     console.log(r)
//   }, reason => {
//     console.log(reason);
//   })
