const fs = require('fs');
// fs.readFile('./example.txt',(err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
let p = new Promise((resolve, reject) => {
    fs.readFile('./example.txt', (err, data) => {
        if (err) reject(err);
        resolve(data);
    })
});
p.then(success => {
    console.log(success);
}, err => {
    console.log(err);
})
