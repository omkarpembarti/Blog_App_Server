import dotenv from 'dotenv'
import admin from '../firebase.js';


dotenv.config();

export const authToken = async (req, res, next) => {

    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];
        if (token == null)
            return res.status(401).json({ 'msg': 'Access token missing' });

        const decodeValue = await admin.auth().verifyIdToken(token)
        //console.log('decodeValue', decodeValue);
        if (decodeValue) {
            req.user = decodeValue.name;
            return next();
        }
        return res.status(403).json({ msg: 'Invalid Token-Session Expired' });

    }
    catch (e) {
        console.log(e);
    }
}