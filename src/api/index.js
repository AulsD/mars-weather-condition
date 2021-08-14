const express = require('express');

const marsWeather = require('./mars-weather');
const planetary = require('./planetary')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/mars-weather', marsWeather);
router.use('/planetary', planetary)

module.exports = router;
