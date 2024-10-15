const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    collaboration: {
        type: [{
            read: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }],
            write: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }]
        }],
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.Schema('Projects', ProjectSchema)