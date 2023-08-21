

const express = require('express');
const dotenv = require('dotenv');
const connection = require('./database/db');

dotenv.config();
const app = express();
app.listen(3000, () => {
    console.log("Express Connected")
})

connection(process.env.DB_USERNAME, process.env.DB_password);


app.get('/', (req, res) => {
    res.status(200).send("I am connected");
})