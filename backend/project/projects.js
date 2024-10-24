const authUser = require('../authMiddleware/authUser')

const express = require('express');
const router = express.Router();

const Project = require('../models/projects');
const User = require('../models/user');

router.use(authUser);
router.use(insider)

function insider(req, res, next){
    console.log('inside the router project')
    next()
}

router.get('/', async (req, res) => {
    console.log('inside the project/')
    username = req.username.username;
    console.log(username)
    const user = await User.findOne({ username: username })
    const ownProjects = await Project.find({ owner: user._id })
    const collabProjects = await Project.find({
        'collaboration.read': user._id,
        'collaboration.write': user._id
    })
        .populate(
            'owner',
            'collaboration.read',
            'collaboration.write'
        )

    console.log(user.username, ownProjects, collabProjects)
    res.status(200).json({ message: "successful", isAuthenticated: true, ownProjects : ['ownProjects'], collabProjects : ['collabProjects']})
})

module.exports = router