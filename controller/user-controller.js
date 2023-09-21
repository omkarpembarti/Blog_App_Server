
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from "../database/models/user.js";

import Token from '../database/models/token.js'
dotenv.config();
export const registerUser = async (req, res) => {
    try {

        const hashpassword = await bcrypt.hash(req.body.password, 10);

        const userData = {
            name: req.body.name,
            userName: req.body.userName,
            password: hashpassword
        };
        const newUser = new User(userData);
        await newUser.save();

        res.status(200).json({ 'success': true, 'msg': 'Registered Successfully' });
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'Error in the BackEnd' });
    }
}

export const loginUser = async (req, res) => {
    try {
        //console.log('Start');
        let user = await User.findOne({ userName: req.body.userName });
        //console.log(user);
        if (!user) {
            return res.status(200).json({ msg: "Invalid Credentials" })
        }
        let match = await bcrypt.compare(req.body.password, user.password);
        //console.log(match);
        if (match) {
            //console.log('inside match');


            let accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m' });
            let refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
            const token = new Token({
                token: refreshToken
            })
            await token.save();

            return res.status(200).json({ accessToken, refreshToken, userName: user.userName, name: user.name });
        } else {
            return res.status(200).json({ msg: 'Incorrect password' });
        }



    } catch (e) {
        console.log(e);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}





