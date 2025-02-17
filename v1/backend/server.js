// Using express which is a fast and lightweight framework for node.js
// Using CORs 

import express from "express" 
import cors from "cors"
import reviews from "./api/reviews.route.js" // We are going to have URL routes seperate from server file

const app = express()

app.use() // This is how we can use middleware
app.user(express.json()) // If someone sends a git request or a post request this can get those requests in json file format

// The initial routes 
app.use("./api/v1/reviews", reviews) // Can use any URL here 
app.use("*", (req, res) => 
       res.status(404).json({error: "not found"})) // request and result -- part of express

export default app // so you can move code from file to file (so you can import) 
