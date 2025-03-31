// top clickable button 
// button colors 

// import Header from "../components/Header";
import { Link } from "react-router-dom"; 
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";
import '../App.css';
import { useState } from "react";
import GridPattern from "../components/patterns";
import ColorPattern from "../components/color-pattern";

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
          style={{ width: "100%", height: "345px", objectFit: "cover" }} 
        />
      </div>

      <main>
      {/* Navigation Buttons */}
      <div className="nav-buttons-container">
      <Link to="/modules">
          {/* // sign-up is known as pricing */}
          <button className="nav-button">Learn</button> 
        </Link>
        <Link to="/resources">
          <button className="nav-button">Resources</button>
        </Link>
        <Link to="/pricing">
          {/* // sign-up is known as pricing */}
          <button className="nav-button">Login</button> 
        </Link>
        <Link to="/blog">
          <button className="nav-button">Blog</button>
        </Link>
      </div>

        {/* Divider Image */}
      <div className="w-full">
        <img 
          src="/banner2.png" 
          alt="Cybersecurity"  
          style={{ width: "100%", height: "325px", objectFit: "cover" }} 
        />
      </div>

      {/* // Was previously Tailwind css */}
      <div className="tail-container">
        <div className="left">
          <GridPattern/>
          <Features />
        </div>
        <div className="right">
          <ProductShowcase />
        </div>
      </div>

      {/* <GridPattern /> */}

      {/* Flex Container for Left Image & Right Hero Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/cyber-bubbles.png"  
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

      <div>
       <ColorPattern />
      </div>

      </main>
    </div>
  );
}
