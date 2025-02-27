import React from 'react';

const SignUpPage = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-title">Create an Account</h1>
      <p className="signup-subtitle">Join us today and start your journey!</p>
      
      <form className="signup-form">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      
      <p className="login-redirect">Already have an account? <a href="/login">Log in here</a></p>
    </div>
  );
};

export default SignUpPage;
