import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./lcc_logo.png";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from ".tanstack/react-query"; -- 3001 server (which is my back-end) 
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/NotFound";
import BlogPage1 from "./pages/parts/BlogPage1";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section (Visible on All Pages) */}
        <header className="header">
        <a href="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        
        <nav className="navbar">
          <a href="/resources">
          <img src="/image1.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/image2.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/image1.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/image2.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/image1.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/image2.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/image1.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/image2.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/image1.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/image2.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">Learn</a>
          <a href="/blog">Blog</a>
          <a href="/pricing">Sign-up</a>
        </nav>
      </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Toaster />} />
          <Route path="/blog/why-cybersecurity" element={<BlogPage1 />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
