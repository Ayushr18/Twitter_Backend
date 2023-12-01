const mongoose = require('mongoose');

const tweetScema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]

}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetScema);
module.exports = Tweet;