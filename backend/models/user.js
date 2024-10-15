const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    refreshToken : {
        type : String,
        default : ''
    },
    projects : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Projects'
    }
})

module.exports = mongoose.model('user', UserSchema)