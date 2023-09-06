import dotenv from 'dotenv'
import mongoose from 'mongoose';
import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage'
import grid from 'gridfs-stream';
dotenv.config();

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

console.log('UserName-->' + userName);
console.log('Password-->' + password);



const storage = new GridFsStorage({
    url: `mongodb+srv://${userName}:${password}@tenet.mbed4r8.mongodb.net/?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        console.log('inside middleware');
        console.log(file);
        //Allowed File type
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({ storage }); 