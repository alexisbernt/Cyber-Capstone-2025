import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
          const response = await axios.post("http://localhost:3001/typeorm/auth", {
              ...formData, // Spread form data
              action: "signup" // Explicitly specify the action
          });
          alert(response.data.message);
      } catch (error) {
          console.error("Signup error:", error);
          alert("Error signing up. Try again!");
      }
  };


  return (
    <div className="signup-container">
      <h1 className="signup-title">Create an Account</h1>
      <p className="signup-subtitle">Join us today and start your journey!</p>
      
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" onChange={handleChange} required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" onChange={handleChange} required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      
      <p className="login-redirect">Already have an account? <a href="/login">Log in here</a></p>
    </div>
  );
};

export default SignUpPage;
