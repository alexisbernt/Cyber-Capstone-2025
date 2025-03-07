const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to insert a user
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    function (err) {
      if (err) return res.status(400).json({ message: "Error: " + err.message });
      res.json({ message: "User registered successfully!", userId: this.lastID });
    }
  );
});

// Route to get all users
app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(rows);
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
