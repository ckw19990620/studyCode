const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')


exports.regUser = (req, res) => {
  // 获取客户端提交的用户信息
  const userinfo = req.body
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userinfo.username, (err, results) => {
    // 执行sql语句失败
    if (err) return res.cc(err)
    // 判断用户名是否被占用
    if (results.length > 0) return res.cc('用户名已存在', 200)
    // 用户名可用，则调用bcrypt.hashSync方法对密码进行加密
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // 定义插入语句
    const insertStr = 'insert into ev_users set ?'
    db.query(insertStr, {username: userinfo.username, password: userinfo.password}, (err, results) => {
      // 处理插入结果
      if (err) return res.cc(err.message)
      if (results.affectedRows !== 1) return res.cc(err.message)
      res.send({status: 200, message: '注册成功'})
    })
  })
}

exports.logIn = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // 定义SQL语句
  const sql = 'select * from ev_users where username=?'
  // 执行SQL语句，根据用户名查询用户信息
  db.query(sql, userinfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (results.length !== 1) return res.cc('登陆失败')
    const compareResult = bcrypt.compareSync(userinfo.password, results[0]['password'])
    // TODO 返回true，则登陆成功，生成Token并发回客户端
    if (compareResult) {
      const user = {...results[0], password: '', user_pic: ''}
      const token = jwt.sign(user,config.key, {expiresIn: config.expiresIn})
      res.send({
        status: 200,
        message: '登录成功',
        token: `Bearer ${token}`
      })
    } else {
      res.cc('密码错误')
    }
  })

}
