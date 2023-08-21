const mongoose = require('mongoose');


const connection = async (userName, password) => {
    try {
        const URI = `mongodb+srv://${userName}:${password}@tenet.mbed4r8.mongodb.net/sample_analytics?retryWrites=true&w=majority`;



        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB ATLAS');
    } catch (error) {
        console.log("Error Connecting to MongoDB ATLAS");
    }
}


module.exports = connection;
