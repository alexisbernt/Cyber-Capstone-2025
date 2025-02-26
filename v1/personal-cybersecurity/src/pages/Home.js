// import Header from "../components/Header";
import { Link } from "react-router-dom"; 
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";
import '../App.css';
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');

  fetch("http://localhost:3001/")
    .then((results) => {
      results.json().then((j) => {
        setName(j.name);
      });
    });

  return (
    <div className="bg-black min-h-screen">
      {name}

      {/* Banner Image */}
      <div className="w-full">
        <img 
          src="/banner_lcc.png" 
          alt="Banner"  
          style={{ width: "100%", height: "300px", objectFit: "cover" }} 
        />
      </div>

      {/* Navigation Buttons */}
      <div className="nav-buttons-container">
        <Link to="/resources">
          <button className="nav-button">Resources</button>
        </Link>
        <Link to="/pricing">
          <button className="nav-button">Pricing</button>
        </Link>
        <Link to="/blog">
          <button className="nav-button">Blog</button>
        </Link>
      </div>

      {/* Flex Container for Left Image & Right Hero Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/demoa.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right">
          <Hero />
        </div>
        </div>

      {/* Flex Container for Right Image & Left Hero Section */}
      <div className="split-container">
        {/* Left-side Hero Section */}
        <div className="split-left">
          <Hero />
        </div>

        {/* Right-side Image */}
        <div className="split-right">
          <img 
            src="/demo.png"  
            alt="Right-side Image"  
            className="split-image"
          />
        </div>
      </div>

      
      <main>
        <Features />
        <ProductShowcase />
      </main>
    </div>
  );
}
