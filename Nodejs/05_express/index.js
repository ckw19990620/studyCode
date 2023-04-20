const express = require('express')
const path = require('node:path')

const app = express()

const USER = {
  name: 'ckw',
  age: 23,
  permissions: 'admin'
}

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, './public')))
// 配置请求体解析工具
app.use(express.urlencoded({extended: true}))

app.get('/hello', (req, res) => {
  res.send('hello')
})

app.get('/students', (req, res) => {
  // res.render() 用来渲染一个模板引擎，并将其返回给浏览器，可以将一个对象作为参数传递给 render 函数
  res.render('students', USER)
})
// 注意： 模板引擎需要被 express 选然后才能使用

// 在所有路由的后面，配置错误路由
app.use((req, res) => {
  // 只要这个中间件执行，说明上文所有路由都没有匹配
  res.status(404);
  res.send('<h1>您访问的地址已被外星人劫持</h1>')
})

app.listen(3000, () => {
  console.log('服务器已启动')
})
