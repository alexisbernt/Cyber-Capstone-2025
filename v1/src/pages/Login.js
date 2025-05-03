import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", action: "login" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/typeorm/auth", formData, { withCredentials: true });

      alert(response.data.message); // Display welcome message
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Error logging in. Please check your network and try again!");
      }
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Log in to continue</p>
      
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required />

        <button type="submit" className="login-button">Log In</button>
      </form>
      
      <p className="signup-redirect">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default LoginPage;
