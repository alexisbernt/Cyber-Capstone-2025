import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./lcc_logo.png";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
// import Modules from "./pages/Modules"
import Module1 from "./components/modules/module1";
import Module2 from "./components/modules/module2";
import Module3 from "./components/modules/module3";
import Pricing from "./pages/Pricing";
import LoginPage from "./pages/Login"
import Blog from "./pages/Blog";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from ".tanstack/react-query"; -- 3001 server (which is my back-end) 
import { Divider } from "./components/ui/divider-pattern";
import NotFound from "./pages/NotFound";
import BlogPage1 from "./pages/parts/BlogPage1";
import BlogPage2 from "./pages/parts/BlogPage2";
import Roadmap from "./pages/Roadmap";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  return (
    <Router>
      <div className="App">
        {/* Header Section (Visible on All Pages) */}
        <header className="header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="brand">Lexi's Cyber Club</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
          <a href="/resources">
            <span className="icon">📝</span>
            <span>Learn</span>
          </a>
          <a href="/blog">
            <span className="icon">📰</span>
            <span>Blog</span>
          </a>
          <a href="/login">
            <span className="icon">🔐</span>
            <span>Login</span>
          </a>
        </div>
      </nav>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #ffffff;
          padding: 12px 24px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
          position: relative;
        }

        .brand {
          font-size: 20px;
          font-weight: bold;
          color: #333;
          text-decoration: none;
        }

        .hamburger {
          display: none;
          font-size: 26px;
          cursor: pointer;
          user-select: none;
        }

        .navbar-right {
          display: flex;
          gap: 24px;
        }

        .navbar-right a {
          color: #444;
          text-decoration: none;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.3s ease;
        }

        .navbar-right a:hover {
          color: #0077cc;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .navbar-right {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            right: 24px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 12px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            z-index: 1000;
          }

          .navbar-right.active {
            display: flex;
          }
        }
      `}</style>
    </header>


        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/modules" element={<Roadmap />} />
          <Route path="/module1" element={<Module1 />} />
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
          <Route path="/signin" element={<Pricing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/why-cybersecurity" element={<BlogPage1 />} />
          <Route path="/blog/phishing" element={<BlogPage2 />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
