const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    done: {
        type: mongoose.Schema.Types.Boolean,
        default: false,
    },
    timeInvested: {
        type: Number,
        default: 0,
    },
    dueDate: {
        type: Date,
    },
    comments: [{
        type: String,
    }],
    images: [{
        type: String,
        trim: true,
    }],
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('Task', TaskSchema);