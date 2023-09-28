import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './routes/route.js';
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
console.log('process.env.PORT-->',process.env.PORT);
console.log('process.env.DB_USERNAME-->',process.env.DB_USERNAME);
console.log('process.env.DB_PASSWORD-->',process.env.DB_PASSWORD);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log("Express Connected")
})
connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);
// INIT ENDS

app.use('/', router);



/*
DB_USERNAME=omkarpembarti
DB_PASSWORD=Password12345qwerty
ACCESS_SECRET_KEY='43599107678df1bf9e9b458d6716922342a502cb66e7b7b3e71233682e68415a6092e5d6c8eb85d19e16f6131a8ba6f4b5b2cb158a7a03f2e59e48961f20935a'
REFRESH_SECRET_KEY ='eee4deeca6b0f845c72b0a863b397d37947aa96b73055c19e20c1a74434899dd8338af7fd77ba2a10a6dfe9296eb7206b8baae7fe1df15b4965c0a7e9cdd1c72'
CLIENT_URL='http://localhost:3000'
*/
