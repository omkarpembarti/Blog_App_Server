
//const User = require('./database/models/user.js');

import User from "../database/models/user.js";

const registerUser = async (req, res) => {
    try {
        const userData = req.body;
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