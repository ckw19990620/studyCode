const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  const query = req.query
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT')
  res.send({
    status: 200,
    msg: '用户数据GET访问成功',
    data: query
  })
})

router.post('/list', (req, res) => {
  console.log(req);
  const query = req.body
  res.send({
    status: 200,
    msg: '用户数据POST访问成功',
    data: query
  })
})

module.exports = router
