import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './routes/route.js';
import blogsRouter from './routes/blogsRoute.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { logger } from './middleware/logger.js';


// INIT STARTS
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log("Express Connected")
})
connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);
// INIT ENDS

app.use('/', router);
app.use('/blogs', blogsRouter);