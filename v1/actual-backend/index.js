// Old index.js (for back-end file)

const express = require('express');
const cors = require('cors');

const app = express()
const port = 3001
// CORS is enabled for the selected origins
let corsOptions = {
    origin: [ 'http://localhost:3000']
};
app.get('/', cors(corsOptions), (req, res) => {
  res.send(JSON.stringify({name: "hello"}))
app.get('/', (req, res) => {
    res.send('Server is running');
});


})
// const cors = require('cors');
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// -------------------------- MongoDB Work
// 
// // import app from "./servers.js"
// import mongodb from "mongodb"
// // import ReviewsDAO from "./dao/reviewsDAO.js" // DAO stands for data access object
// // A data access object seperates a client interface from the data mechanisms

// const MongoClient = mongodb.MongoClient // use to connect to database
// const mongo_username = process.env['MONGO_USERNAME'] // how you access environment variables
// const mongo_password = process.env['MONGO_PASSWORD'] 
// const uri = `mongodb+srv://alexiswink:<db_password>@cluster0.wnych.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// // const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.wnych.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
// // You then run your database on a port. The port we use is 8000
// const port = 8000

// // first connect
// MongoClient.connect(
//     uri, // uri will be a JavaScript object 
//     {
//         maxPoolSize: 50 ,// set of key value pairs 
//         wtimeoutMS: 2500, // amount of miliseconds before times out
//         useNewUrlParser: true 
//     })
//     .catch(err => {
//         console.error(err.stack) // the error will get logged to the error stack
//         process.exit(1) // exiting the program process
//     })
//     // start the web server
//     .then(async client => {
//         app.listen(port, () => {

//         })
//     }) // do a function