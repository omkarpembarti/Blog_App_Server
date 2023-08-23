import { connect } from 'mongoose';


const connection = async (userName, password) => {
    try {
        //const URI = `mongodb+srv://${userName}:${password}@tenet.mbed4r8.mongodb.net/sample_analytics?retryWrites=true&w=majority`;
        const URI = `mongodb+srv://${userName}:${password}@tenet.mbed4r8.mongodb.net/?retryWrites=true&w=majority`;



        await connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB ATLAS');
    } catch (error) {
        console.log(error);
        console.log("Error Connecting to MongoDB ATLAS");
    }
}


export default connection;
