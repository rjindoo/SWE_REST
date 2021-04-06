const express = require('express')
const fetch = require("node-fetch");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home')
})

router.get('/again', (req, res) => {
    res.send('Home again')
})

router.post('/', (req, res) => {
    const data = req.body
    fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => res.json(data));
        
})

module.exports = router;