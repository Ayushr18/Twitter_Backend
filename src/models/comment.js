const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEamil: {
        type: String,
    },
    
}, {timestamps: true});

const comment = mongoose.model('Comment', commentSchema);
module.exports = comment;