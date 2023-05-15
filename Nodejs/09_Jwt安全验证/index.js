const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const sql = require('mysql')
const expressJwt = require('express-jwt')

const db = sql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'firstdb'
})
app.use(express.urlencoded({extended: false}))
/**
 * 使用express-jwt的过程
 * 首先引入 express-jwt 和 jsonwebtoken，并进行express-jwt的配置
 * 通过jwt在用户发起第一次请求的时候，使用非敏感信息生成token，并返回到客户端
 * 客户端收到token后，将其放入请求头中
 * 后续服务器收到请求后，解析token
 * 最后进行错误捕获，避免因为token问题造成服务中断
 */


/**
 * 定义安全密钥
 */
const secretKey = 'isakNewton ^_^'

/**
 * 解析请求中的token
 */
app.use(expressJwt({ secret: secretKey}).unless({path: [/^\/api\//]}))

app.post('/api/login', (req,res) => {
  const body = req.body
  db.query(`select * from users where username=?`, body.username, (err, value) => {
    if (err) return console.log(err.message)
    if (value[0].username === body.username && value[0].password === body.password) {
      res.send({
        status: 200,
        msg: '登陆成功',
        token: jwt.sign({username: body.username}, secretKey, {expiresIn: '300s'})
      })
    } else {
      res.send({
        status: 0,
        msg: '登陆失败'
      })
    }
  })
})
app.get('/admin/list', (req, res) => {
  console.log(req.user);
  res.send({
    status: 200,
    msg: '查询成功',
    data: req.user
  })
})
app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 401,
      message: 'token过期或不合法',
    })
  }
  res.send({
    status: 500,
    message: '其他错误'
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})
