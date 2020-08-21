const express = require('express');
const router = express.Router();
const passport = require('passport');

const Time = require('../models/Time');

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */

router.post('/create', async (req, res) => {
  try {
    const times = await Time.create(req.body)
    res.send(times)
  } catch (err) {
    return res.status(500).json({
      msg: "Incorrect password."
    });
  }
})

router.get('/', async (req, res) => {
  try {
    const times = await Time.find()
    res.send(times)
  } catch (err) {
    return res.status(500).json({
      msg: "Incorrect password."
    });
  }
});

module.exports = router;
