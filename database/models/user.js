//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', userSchema);

export default User;