import Blog from '../database/models/blog.js';
import Comment from '../database/models/comment.js';

export const publishBlog = async (req, res) => {
    try {
        const blog = await new Blog(req.body);
        console.log(blog);
        blog.save();
        return res.status(200).json({
            'success': true,
            'msg': 'Successfully Published',
            'blogData': blog
        })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ 'msg': 'Server Error' });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        return res.status(200).json(blogs);
    } catch (e) { console.log(e) }
}


export const getMyBlogs = async (req, res) => {
    try {
        const userName = req.params.userName;
        const blogs = await Blog.find({ userName });
        res.status(200).json(blogs);
    }
    catch (e) {
        console.log(e);
    }
}


export const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id);
        await blog.deleteOne();

        res.status(200).json(blog);
        //Delete the corressponding comments also.

        const comments = await Comment.deleteMany({ 'postID': id });
        console.log(comments);
    }
    catch (e) {
        console.log(e);
    }
}