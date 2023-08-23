
import express from 'express'
import registerUser from '../controller/user-controller.js'
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', (req, res) => {

    res.status(200).json({ msg: 'Successfull Login' });
})



export default router;