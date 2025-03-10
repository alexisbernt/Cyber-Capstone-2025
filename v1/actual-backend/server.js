require("reflect-metadata");
const { createConnection } = require("typeorm");
const express = require('express');
const { getRepository } = require('./src/utils/helpers');
const setupRoutes = require('./src/routes/api');

const app = express();

// Constants
const PORT = 3000;
const { User } = require("./src/entity/User"); // Import the User entity

// Main application function using async/await
const startServer = async () => {
    try {
        const connection = await createConnection();
        const userRepository = connection.getRepository(User);

        app.use(express.json());

        // Set up API routes
        app.use("/typeorm", setupRoutes(userRepository));

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};


// Start the application
startServer();