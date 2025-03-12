require("reflect-metadata");
const { createConnection } = require("typeorm");
const express = require("express");
const cors = require("cors");
const setupRoutes = require("./src/routes/api");
const { User } = require("./src/entity/User"); // Import User entity

const app = express();
const port = 3001;

// Enable CORS globally
const corsOptions = {
    origin: ["http://localhost:3000"],
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

// Start the application with TypeORM connection
const startServer = async () => {
    try {
        // Create the database connection
        const connection = await createConnection();

        // Get repository AFTER the connection is established
        const userRepository = connection.getRepository(User);

        // Pass the repository to your routes
        app.use("/typeorm", setupRoutes(userRepository));

        // Start the server
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

// Start server
startServer();
