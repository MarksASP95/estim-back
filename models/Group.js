const mongoose = require('mongoose');

const GroupSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Group', GroupSchema);