const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')
const userInfoRouter = require('./router/userinfo')
const joi = require('@hapi/joi')
const expressJwt = require('express-jwt')
const config = require("./config");

const app = express()


app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err
    })
  }
  next()
})
app.use(expressJwt({secret: config.key}).unless({ path: [/^\/api\//] }))
app.use(cors())
app.use('/api', userRouter)
app.use('/my', userInfoRouter)
app.use((err, req, res) => {
  // 表单数据验证失败导致的错误
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 身份认证失败导致的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
  // 其他错误
  res.cc(err)
})

app.listen(3000, () => {
  console.log('服务器已启动')
})
