const express = require('express');
const path = require('node:path');
const app = express();

const USER_INFO = [
  {userId: 'ckw', password: '123', nickname: '系统管理员'},
  {userId: 'admin', password: '123', nickname: '管理员'},
]

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, './public')))
// 引入解析请求体的中间件
app.use(express.urlencoded())

app.post('/login', (req, res) => {
  const {userName, passWord} = req.body;
  let login = USER_INFO.find((item) => {
    return item.userId === userName && item.password === passWord
  })
  if (login) {
    res.send(`<h1>欢迎回来</h1>`)
  } else {
    res.send('<h1>用户名或密码错误</h1>')
  }
})
app.listen(3000)
