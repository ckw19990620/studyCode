const joi = require('@hapi/joi')

/**
 * 定义验证规则对象
 */
const id = joi.number().integer().min(1).required()
const username = joi.string().alphanum().min(1).max(20).required()
const password = joi.string().pattern(/^\S{1,20}$/).required()
const nickname = joi.string().required()
const email = joi.string().email().required()

exports.reg_login_schema = {
  body:{
    username,
    password
  }
}
exports.update_userinfo_schema = {
  body:{
    nickname,
    email
  }
}

exports.update_password_schema = {
  body: {
    oldPwd: password,
    newPwd: joi.not(joi.ref('oldPwd')).concat(password)
  }
}
