import React from "react";
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
          <img src="/flowers.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/oregon.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/oregon-rock.jpg" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/mountains.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/rocks.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/flowers.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/oregon.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/oregon-rock.jpg" alt="Learn" className="nav-icon" />
          </a>
          <a href="/blog">
            <img src="/mountains.png" alt="Blog" className="nav-icon" />
          </a>
          <a href="/resources">
          <img src="/rocks.png" alt="Learn" className="nav-icon" />
          </a>
          <a href="/resources">Learn</a>
          <a href="/blog">Blog</a>
          <a href="/login">Login</a>

        </nav>
      </header>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/modules" element={<Roadmap />} />
          <Route path="/module1" element={<Module1 />} />
          <Route path="/module2" element={<Module2 />} />
          <Route path="/module3" element={<Module3 />} />
          <Route path="/pricing" element={<Pricing />} />
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
