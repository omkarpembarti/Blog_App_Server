

import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './routes/auth.js';

// INIT STARTS
dotenv.config();
const app = express();
app.listen(3000, () => {
    console.log("Express Connected")
})
connection(process.env.DB_USERNAME, process.env.DB_password);
// INIT ENDS


app.use('/', router);
app.get('/', (req, res) => {
    res.status(200).send("I am connected");
})