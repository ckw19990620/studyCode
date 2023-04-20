const express = require('express');
const path = require('node:path');
const app = express();

const USER = [
  {username: 'admin', password: '123', nickname: '管理员'},
  {username: 'ckw', password: '123', nickname: '用户'},
]

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, './public')))
// 引入解析请求体的中间件
app.use(express.urlencoded())

// 登录
app.post('/login', (req, res) => {
  const {userName, passWord} = req.body;
  let login = USER.find((item) => {
    return item.username === userName && item.password === passWord
  })
  if (login) {
    res.send(`登陆成功，${login.nickname}`)
  } else {
    res.send('用户名或密码输入错误')
  }
})


// 注册
app.post('/signup', (req, res) => {
  const {userName, passWord, nickName} = req.body;
  let sign = USER.find((item) => {
    return item.username === userName
  })
  if (!sign) {
    USER.push({
      username: userName,
      password: passWord,
      nickname: nickName
    })
    res.send(`<h1>注册成功 ${nickName}</h1>`)
  } else {
    if (sign.username === userName) {
      res.send('<h1>该用户名已被注册</h1>')
    }
  }
})

app.listen(3000)
