const express = require('express')
const app = express()
const cors = require('cors')
const user = require('./routes/user')
const goods = require('./routes/goods')


// 配置cors中间件， 解决跨域问题
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use('/user', user)
app.use('/goods', goods)


app.get('/list', (req, res) => {
  const query = req.query;
  res.send({
    status: 200,
    msg: '111',
    data: query
  })
})

app.use((req, res) => {
  res.send('<h1>404 NOT FOUND</h1>')
})

app.listen(3000, () => {
  console.log('服务器启动成功')
})
