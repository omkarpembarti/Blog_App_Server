import Comment from '../database/models/comment.js';


export const addComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        comment.save();
        return res.status(200).json({ 'success': true, 'msg': 'Comment Successfully Added' });

    } catch (e) {

    }
}

export const getComments = async (req, res) => {
    try {
        let postID = req.params.id;

        let allCommnents = await Comment.find({ "postID": postID });


        return res.status(200).json(allCommnents);

    } catch (e) {
        console.log(e);
    }
}