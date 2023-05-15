const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const user = require('./routes/user')
const goods = require('./routes/goods')
// 导入mysql模块
const sql = require('mysql')
// 建立与数据库的连接
const db = sql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'firstdb'
})
// 测试mysql是否能正常工作

/**
 * select * from users  查询users表中的数据
 * 注意：如果执行的是select语句，返回的结果是一个数组
 */
  // db.query('select * from users', (err, res) => {
  //   if (err) return console.log(err)
  //   console.log(res);
  // })

/**
 * INSERT INTO
 * 向users表中插入数据
 * 注意：如果执行的是 insert 语句，则返回的结果是一个对象
 * 可以通过 affectedRows 属性来判断是否插入成功
 */
// const userInfo = {username: 'admin', password: 'abc345'}
// db.query('insert into users(username, password) values(?, ?)', [userInfo.username, userInfo.password], (err, res) => {
//   if (err) return console.log(err)
//   if (res.affectedRows === 1) {
//     console.log('添加成功')
//   }
// })

// 便捷方式
// const userInfo = {username: 'admin', password: 'abc345'}
// db.query('insert into users set ?', userInfo, (err, res) => {
//   if (err) return console.log(err)
//   if (res.affectedRows === 1) {
//     console.log('添加成功')
//   }
// })

/**
 * UPDATE
 * 更新 users 表中的数据
 * 同样返回一个对象，可以通过affectedRows === 1 来判断是否操作成功
 */
// const sqlstr = 'update users set username=?, password=? where id=?'
// const userInfo = {username: 'ioioj', password: 'asfasdf', id: 2}
// db.query(sqlstr, [userInfo.username, userInfo.password, userInfo.id], (err, res) => {
//   if (err) return console.log(err.message)
//   if (res.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// update 的便捷方式
// db.query(sqlstr, [userInfo, userInfo.id], (err, res) => {
//   if (err) return console.log(err.message)
//   if (res.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })


/**
 * DELETE
 * 将users表中删除一条或多条数据
 * 同样返回一个对象
 * 通过 affectedRows 来判断是否删除成功
 */
// const sqlstr = 'delete from users where username=?'
// db.query(sqlstr, (err, res) => {
//   if (err) return console.log(err.message)
//   console.log(res);
// })

/** 标记删除
 * 直接彻底删除数据风险较高，如果后续需要找回数据则很麻烦。
 * 可以采用标记删除的方式，将该条数据的状态标记为已删除，则可以模拟出删除功能的效果
 */
// const sqlstr = 'update users set status=1 where id=?'
// db.query(sqlstr, 2, (err, res) => {
//   if (err) return console.log(err.message)
//   console.log('删除成功')
// })



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
