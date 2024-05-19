const express = require('express');
const Task = require('../model/userSchema');
const userdb = require('../model/userSchema');

const router = express.Router();

router.get('/userdata', async (req, res) => {
  try {
    const userinfo = await userdb.findOne().sort({ timestamp: -1 });
    res.json(userinfo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
