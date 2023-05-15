const express = require('express')
const router = express.Router();

router.get('/list', (req, res) => {
  console.log(req.params);
  const query = req.query
  res.send({
    status: 200,
    msg: '商品列表访问成功',
    data: query
  })
})

module.exports = router
