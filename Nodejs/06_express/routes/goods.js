const express = require('express')
const router = express.Router();

router.get('/list', (req, res) => {
  res.send('商品列表访问成功')
})

module.exports = router
