/**
 * API Routes for the application
 */
const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../entity/User");
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
                // If user doesn't exist, return error
                if (!existingUser) {
                    return res.status(400).json({ message: "User not found. Please sign up." });
                }

                // Compare passwords
                const isPasswordValid = await bcrypt.compare(password, existingUser.password);
                if (!isPasswordValid) {
                    return res.status(400).json({ message: "Invalid credentials." });
                }

                // Generate token
                const token = jwt.sign({ userId: existingUser.id }, "your_secret_key", { expiresIn: "1h" });

                return res.json({ message: `Welcome back, ${existingUser.name}!`, token });
            } 
            
            if (action === "signup") {
                // If user exists, prevent duplicate signup
                if (existingUser) {
                    return res.status(400).json({ message: "Email already in use." });
                }

                if (!name) {
                    return res.status(400).json({ message: "Name is required for signup." });
                }

                // Hash password before saving
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
