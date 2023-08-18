// console.log('I am Omkar');

// //kBNOMGu5sekTEhGq


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://omkarpembarti:kBNOMGu5sekTEhGq@tenet.mbed4r8.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

const express = require('express');
const app = express();

app.listen(3000, () => {

    console.log("Express Connected")
})

app.get('/', (req, res) => {
    res.status(200).send("I am connected");
})