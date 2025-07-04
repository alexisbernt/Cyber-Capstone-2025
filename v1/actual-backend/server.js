/**
 * Main server script
 */
require("reflect-metadata");
const { createConnection } = require("typeorm");
const express = require("express");
const cors = require("cors");
const setupRoutes = require("./src/routes/api");
const { User } = require("./src/entity/User");

const app = express();
const port = 3001;

app.use(cors({ origin: ["http://localhost:3000", "https://lcc.milkonthefloor.com"], credentials: true }));
app.use(express.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

const startServer = async () => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);

    // Your API routes
    app.use("/typeorm", setupRoutes(userRepository));

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
