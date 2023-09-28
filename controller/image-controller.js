

import dotenv from 'dotenv';
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';
import fs from 'fs'
dotenv.config();


// const reloadEnv = () => {
//     const envConfig = dotenv.parse(fs.readFileSync('.env'))

//     for (const key in envConfig) {
//         process.env[key] = envConfig[key]
//     }
// }

// Reload .env variables
//reloadEnv();


//const url = process.env.SERVER_URL;
//Temp fix
const url = '';



let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {

    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}


export const uploadImage = (req, res) => {
    try {
        // console.clear();
        // console.log(req);
        if (!req.file) {
            res.status(404).json({ msg: 'File Not Found' });
        } else {
            const imageURL = `${url}/image/${req.file.filename}`;
            res.status(200).json(imageURL);
        }
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ 'msg': 'Something went wrong in server' });
    }


}