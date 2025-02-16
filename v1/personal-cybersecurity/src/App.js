import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
// import { queryClient } from "./lib/queryClient";
// import { QueryClientProvider } from ".tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section (Visible on All Pages) */}
        <header className="header">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="navbar">
            <a href="/resources">Resources</a>
            <a href="/blog">Blog</a>
            <a href="/pricing">Pricing</a>
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Toaster />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
