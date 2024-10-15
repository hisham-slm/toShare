require('dotenv').config()
const express = require('express');
const router = express.Router();
router.use(express.json());

const User = require('../models/user');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

// router.use(cookieParser())

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = await User.findOne({ $or : [{username : username}, {email : username}]});
        if (!user){
            return res.status(404).json({message : "Username or Email not found!"})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(401).json({message : "Incorrect Password!"})
        }

        const accessToken = jwt.sign({username : user.username}, process.env.ACEESS_TOKEN_SECRET, {expiresIn:'10m'});
        const refreshToken = jwt.sign({username : username}, process.env.REFRESH_TOKEN_SECRET);

        await User.updateOne({ $or : [{username : username}, {email : username}]}, { $set : {refreshToken : refreshToken}})

        res.cookie('access_token', accessToken,
            {
                httpOnly : false,
                secure : true,
                sameSite : 'None'
            }
        )

        return res.status(200).json({message : 'User authenticated successfully!'})

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error", error : error})
    }
})

router.post('/signup', async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    try {
        const existingUser = await User.findOne({ $or : [{username : username}, {email : email}]})
        if (existingUser){
            return res.status(400).json({message : 'User already exists'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({username : username, password : hashedPassword, email : email })
        newUser.save()

        return res.status(201).json({message : 'User added successfully!'})

    } catch (error) {
        return res.status(500).json({messge : "Internal Server Error", error : error})
    }
})

module.exports = router