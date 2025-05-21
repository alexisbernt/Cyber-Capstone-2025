/**
 * API Routes for the application
 */
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

module.exports = (userRepository) => {
    router.post("/auth", async (req, res) => {
        try {
            const { name, email, password, action } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required." });
            }

            // Find user in the database
            const existingUser = await userRepository.findOne({ where: { email } });

            if (action === "login") {
                if (!existingUser) {
                    return res.status(404).json({ message: "User was not found in database. Please sign up." });
                }

                const isPasswordValid = await bcrypt.compare(password, existingUser.password);
                if (!isPasswordValid) {
                    return res.status(401).json({ message: "Invalid credentials." });
                }

                const token = jwt.sign({ userId: existingUser.id }, "your_secret_key", { expiresIn: "1h" });

                return res.json({ message: `Welcome back, ${existingUser.name}!`, token });
            } 
            
            if (action === "signup") {
                if (existingUser) {
                    return res.status(400).json({ message: "Email already in use." });
                }

                if (!name) {
                    return res.status(400).json({ message: "Name is required for signup." });
                }

                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = userRepository.create({ name, email, password: hashedPassword });

                await userRepository.save(newUser);

                return res.status(201).json({ message: "User registered successfully. You can now log in." });
            }

            return res.status(400).json({ message: "Invalid action. Use 'signup' or 'login'." });

        } catch (error) {
            console.error("Auth error:", error);
            return res.status(500).json({ message: "Server error. Try again later!" });
        }
    });

    return router;
};
