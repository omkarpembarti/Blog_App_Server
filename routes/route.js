import express from 'express'
import { loginUser, registerUser } from '../controller/user-controller.js'
import { authToken } from '../controller/jwt-controller.js';
import { addComment, getComments } from '../controller/comment-controller.js';

const router = express.Router();

//User routes
router.post('users/register', registerUser)
router.post('users/login', loginUser)

//Comments routes
router.post('/comments/new', authToken, addComment);
router.get('/comments/:id', authToken, getComments);

export default router;