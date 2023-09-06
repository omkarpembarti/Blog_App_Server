import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();

export const authToken = (req, res, next) => {

    try {
        //console.log('req.headers', req.headers);
        const authHeader = req.headers['authorization'];
        //console.log('authHeader', authHeader);
        const token = authHeader.split(' ')[1];
        if (token == null)
            return res.status(401).json({ 'msg': 'Access token missing' });

        jwt.verify(token, process.env.ACCESS_SECRET_KEY, (error, user) => {
            if (error)
                return res.status(403).json({ msg: 'Invalid Token' });
            //403 --> Understands the request, but refuses to authorize it
            req.user = user;
            next();
        });
    }
    catch (e) {
        console.log(e);
    }

}