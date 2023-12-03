import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEamil: {
        type: String,
    },
    
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;