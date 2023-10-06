import express from 'express'
import { getImage, uploadImage } from '../controller/image-controller.js';
import upload from '../utils/uploads.js';
import { authToken } from '../controller/jwt-controller.js';
import { deleteBlog, getAllBlogs, getMyBlogs, publishBlog, updateBlog } from '../controller/blog-controller.js'
const blogsRouter = express.Router();

//Blogs routes

//Blogs Image routes
blogsRouter.post('/image', upload.single('file'), uploadImage);
blogsRouter.get('/image/:filename', getImage);

//Blogs CRUD routes
blogsRouter.get('/all', authToken, getAllBlogs);
blogsRouter.get('/:userName', authToken, getMyBlogs);
blogsRouter.post('', authToken, publishBlog);
blogsRouter.put('', authToken, updateBlog);
blogsRouter.delete('/:id', authToken, deleteBlog);


export default blogsRouter;