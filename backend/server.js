require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const frontendAddress = process.env.FRONTEND

const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser())

app.use(cors({
    origin : frontendAddress,
    methods : 'GET, POST, PUT, DELETE',
    allowedHeaders : ['Content-Type', 'Autherization'],
    credentials : true
}))

const Authenticate = require('./authentication/authentication')

app.get('/', (req, res) => {
    res.send('you are at the home page')
})

app.use('/authentication', Authenticate)

mongoose.connect("mongodb://localhost/toshare")
    .then(() => console.log('Database connected'))
    .catch((error) => console.error("Database connection error", error))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})