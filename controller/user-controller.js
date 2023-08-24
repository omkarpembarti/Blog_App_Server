
//const User = require('./database/models/user.js');

import User from "../database/models/user.js";
import bcrypt from 'bcrypt'
const registerUser = async (req, res) => {
    try {

        const hashpassword = await bcrypt.hash(req.body.password, 10);
        const userData = {
            userName: req.body.userName,
            password: hashpassword
        };
        const newUser = new User(userData);
        await newUser.save();

        res.status(200).json({ msg: 'Registered Successfully' });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'Error in the BackEnd' });
    }
}

export default registerUser;