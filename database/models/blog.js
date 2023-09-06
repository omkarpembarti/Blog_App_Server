import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    }

});

const Blog = mongoose.model('blog', blogSchema);

export default Blog;