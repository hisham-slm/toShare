require('dotenv').config(

)
const jwt = require('jsonwebtoken');

async function authUser(req, res, next) {
    const token = req.cookies.access_token;

    if (!token) {
        res.status(401).json({ isAuthenticated: false, message: 'No Token' })
    }
    console.log(token)

    jwt.verify(token, process.env.ACEESS_TOKEN_SECRET, (error, username) => {
        if (error) {
            res.status(403).json({ isAuthenticated: false, message: `Error ${error}` })
        } else {
            req.username = username
            next()
        }

    })
}

module.exports = authUser