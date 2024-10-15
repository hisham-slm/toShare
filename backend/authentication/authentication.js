const express = require('express');
const router = express.Router();
router.use(express.json());

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/login', (req, res) => {
    console.log('requested')
    const username = req.body.username;
    const password = req.body.password;

    res.status(200).json({username : username, password : password})
})

router.post('/signup', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    res.status(200).json({username :username,email: email,password: password})
})

module.exports = router