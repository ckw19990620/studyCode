const db = require('../db/index')
const bcrypt = require('bcryptjs')


exports.getUserInfo = function (req, res) {
  const selectSqlStr = 'select id, username, nickname, email, user_pic from ev_users where id=?'
  db.query(selectSqlStr, req.user.id, (err, value) => {
    if (err) return res.cc('获取用户信息失败')
    if (value.length !== 1) return res.cc('获取用户信息失败')
    res.send({
      status: 200,
      data: value[0]
    })
  })
}

exports.updateUserInfo = function (req, res) {
  const updateStr = `update ev_users set ? where id = ?`
  db.query(updateStr, [req.body, req.user.id], (err, value) => {
    if (err) return res.cc('更新失败')
    if (value.affectedRows !== 1) return res.cc('更新失败')
    res.send({
      status: 200,
      message: '更新成功'
    })
  })
}

/** TODO 重置密码
 * 1. 获取到当前用户的信息
 * 2. 将传回的旧密码与数据库中的密码进行匹配
 * 3. 匹配成功，将加密后的密码更新到数据库中
 * 4. 返回处理结果
 * @param req
 * @param res
 */
exports.updatePwd = (req, res) => {
  const selectSql = 'select * from ev_users where id = ?'
  db.query(selectSql, req.user.id, (err, values) => {
    if (err) return res.cc('查询出错')
    if (values.length !== 1) return res.cc('用户不存在')
    const compareResult = bcrypt.compareSync(req.body.oldPwd, values[0]['password'])
    if (compareResult) {
      const updateSql = 'update ev_users set password=? where id = ?'
      const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
      db.query(updateSql, [newPwd, req.user.id], (err, values) => {
        if (err) return res.cc('重置密码失败')
        if (values.affectedRows !== 1) return res.cc('重置密码失败')
        res.send({
          status: 200,
          message: '重置密码成功'
        })
      })
    } else {
      res.cc('原密码错误')
    }
  })
}
