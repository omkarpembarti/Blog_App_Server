import express from 'express'
import { loginUser, registerUser } from '../controller/user-controller.js'
import { getImage, uploadImage } from '../controller/image-controller.js';
import upload from '../utils/uploads.js';
import { authToken } from '../controller/jwt-controller.js';
import { getAllBlogs, publishBlog } from '../controller/blog-controller.js'
import { addComment, getComments } from '../controller/comment-controller.js';
console.clear();
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)


router.post('/blog/publish', authToken, publishBlog);
router.post('/blog/publishImage', upload.single('file'), uploadImage);
router.get('/image/:filename', getImage);
router.get('/allBlogs', authToken, getAllBlogs);

router.post('/comment/new', authToken, addComment);
router.get('/comments/:id', authToken, getComments);

export default router;