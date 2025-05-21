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

// Enable CORS globally
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// The "Middleware"
app.use(express.json());

// the Root route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// Start the application with the ORM (TypeORM) connection
const startServer = async () => {
    try {
        const connection = await createConnection();
        const userRepository = connection.getRepository(User);
        
        // Ensure routes receive repository
        app.use("/typeorm", setupRoutes(userRepository)); // getting from api

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();
