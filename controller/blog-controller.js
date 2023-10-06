import Blog from '../database/models/blog.js';
import Comment from '../database/models/comment.js';

export const publishBlog = async (req, res) => {
    try {
        const blog = await new Blog(req.body);

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


export const updateBlog = async (req, res) => {
    try {
        const blogId = req.body._id;
        const blog = await Blog.findById(blogId);

        if (!blog)
            return res.status(404).json({ 'msg': 'Post not found' });

        const response = await Blog.findByIdAndUpdate({ _id: blogId }, req.body);

        res.status(200).json({ 'success': true, 'msg': 'Updated Successfully', 'updatedBlog': response });
    }
    catch (e) { console.log(e); }
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

        res.status(200).json({ 'success': true, 'msg': 'Deleted Successfully' });
        //Delete the corressponding comments also.

        const comments = await Comment.deleteMany({ 'postID': id });
    }
    catch (e) {
        console.log(e);
    }
}