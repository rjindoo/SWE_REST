const express = require('express')
const fetch = require("node-fetch");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home')
})


router.post('/', async (req, res) => {
    // Extract JSON to send to backend
    const data = req.body
    // Sending request to Backend
    try {
        const response = await fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const temp = await response.json();
        res.json(temp);

        // .then(response => response.json())
        // .then(data => res.json(data));
    }
    catch {
        return res.send({message: "Error"})
        // console.log("err")
        // return res.status(400).send({
        //     message: 'This is an error!'
        // });
    }
})



module.exports = router;