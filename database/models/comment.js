import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true,
    },
    'postID': {
        type: String,
        required: true,
    },
    'comment': {
        type: String,
        required: true,
    }
})

const Comment = mongoose.model('comment', commentSchema);

export default Comment;