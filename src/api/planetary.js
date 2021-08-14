const express = require('express')
const axios = require('axios')

const router = express.Router();

const BaseURL = 'https://api.nasa.gov/planetary/apod?'

const apiKeys = new Map();
apiKeys.set('12345', true)

router.get('/', (req, res, next) => {
    const apiKey = req.get('X-API-KEY')
    if (apiKeys.has(apiKey)) {
        next()
    } else {
        const error = new Error('Invalid api key')
        next(error)
    }
}, async (req, res, next) => {
    try {
        const params = new URLSearchParams({
            api_key: process.env.NASA_API_KEY,
            // feedtype: 'json',
            // ver: '1.0',
        });
    
        const { data } = await axios.get(`${BaseURL}${params}`)
    
        return res.json(data)
    } catch (error) {
        return next(error)
    }
})

module.exports = router