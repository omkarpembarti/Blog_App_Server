import Blog from '../database/models/blog.js';

export const publishBlog = async (req, res) => {
    try {


        const blog = await new Blog(req.body);
        blog.save();
        return res.status(200).json({ 'msg': 'Successfully Added' })
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ 'msg': 'Server Error' });
    }

}