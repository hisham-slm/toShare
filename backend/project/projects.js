const authUser = require('../authMiddleware/authUser')

const express = require('express');
const router = express.Router();

router.use(authUser);

router.get('/project', async (req, res) => {
    console.log('in project/project')
    res.status(200).json({message : "successful",  isAuthenticated : true})
})

module.exports = router