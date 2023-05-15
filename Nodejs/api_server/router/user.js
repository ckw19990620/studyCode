const express = require('express')
const router = express.Router()
const userHandler = require('../router_handler/user')
/**
 * 导入验证的中间件
 */
const expressJoi = require('@escook/express-joi')
const {reg_login_schema} =  require('../schema/user')
// 注册
router.post('/reguser',expressJoi(reg_login_schema), userHandler.regUser)
// 登录
router.post('/login',expressJoi(reg_login_schema ), userHandler.logIn)

module.exports = router
