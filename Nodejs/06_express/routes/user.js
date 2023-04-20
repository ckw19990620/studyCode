const express = require('express');
const router = express.Router();

router.get('/list/:id', (req, res) => {
  console.log(req.params.id);
  res.send('list访问成功')
})

module.exports = router
