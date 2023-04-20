const path = require("node:path");
const result = path.resolve(__dirname, './fs.txt')
// console.log(result);


// fs 模块
const fs = require('node:fs/promises');

// readFileSync 是同步方法，在读取大文件的时候，会阻塞后续代码的执行，可以用readFile代替
// const res = fs.readFileSync(result)


// fs.readFile(result, (err, buffer) => {
//   if (err) {
//     console.log('出错了')
//   } else {
//     console.log(buffer.toString())
//   }
// })

// Promise 版本
// fs.readFile(result).then(buffer => {
//   console.log(buffer.toString());
// }, reason => {
//   console.log(reason);
// })

// async 版本
// (async  () => {
//   try{
//     const buffer = await fs.readFile(result)
//     console.log(buffer.toString())
//   } catch (e) {
//     console.log(e);
//   }
// })()
