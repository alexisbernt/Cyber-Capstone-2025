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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})