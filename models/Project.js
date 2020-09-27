const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    about: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    active: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
    },
});

module.exports = mongoose.model('Project', ProjectSchema);