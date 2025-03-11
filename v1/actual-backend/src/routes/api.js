/**
 * API Routes for the application
 */
const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../entity/User");

const router = express.Router();

module.exports = (userRepository) => {
    router.post("/signup", async (req, res) => {
        try {
            const { name, email, password } = req.body;
            
            // Check if user exists
            const existingUser = await userRepository.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: "Email already in use" });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = userRepository.create({ name, email, password: hashedPassword });

            // Save to database
            await userRepository.save(newUser);

            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            console.error("Signup error:", error);
            res.status(500).json({ message: "Server error. Try again later!" });
        }
    });

    return router;
};
