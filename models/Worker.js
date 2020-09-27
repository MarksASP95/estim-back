const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    about: {
        type: String,
        trim: true,
    },
    projects: [{
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
        hourlyRate: {
            type: Number,
            default: 0,
        },
        fixedRate: {
            type: Number,
            default: 0,
        }
    }],
    profilePic: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Worker', WorkerSchema);