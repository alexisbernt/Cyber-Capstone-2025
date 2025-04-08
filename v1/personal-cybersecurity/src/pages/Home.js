// top clickable button 
// button colors 

// import Header from "../components/Header";
import { Link } from "react-router-dom"; 
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import ProductShowcase from "../components/layout/home/ProductShowcase";
import HorizontalShowcase from "../components/layout/home/HorizontalShowcase";
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
            style={{ width: "100%", height: "320px", objectFit: "cover" }} 
          />
        </div>

        {/* Clickable Link */}
        <div className="text-center my-4">
          <Link to="/pricing">
            <img 
              src="/enter2win.png" 
              alt="Enter to Win" 
              className="mx-auto cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Flex Container for Right Content & Left Image */}
        <div className="split-container">
          
          {/* Left-side Image */}     
          <div className="split-left">
            <img 
              src="/home-image.png"  
              alt="Right-side Image"  
              className="split-image"
            />
          </div>


        {/* Right-side Section */}
        <div className="split-right">
          <Link to="/modules">
            <img 
              src="/starter-text.png"  
              alt="Right-side Image"  
              className="split-image"
            />
          </Link>
        </div>
      </div>

      {/* Flex Container for Left Content & Right Image */}
      <div className="split-container">
        {/* Right-side Image */}   
        <div className="split-right">
        <Link to="/modules">
            <img 
              src="/starter-text2.png"  
              alt="Right-side Image"  
              className="split-image"
            />
        </Link>
      </div>

        {/* Left-side Section */}
        <div className="split-left">
          <img 
            src="/home-image2.png"  
            alt="Right-side Image"  
            className="split-image"
          />
        </div>
        
      </div>

      <HorizontalShowcase />

      {/* Final Banner Image */}
      <div className="w-full">
          <img 
            src="/bottom-banner.png" 
            alt="Cybersecurity"  
            style={{ width: "100%", height: "320px", objectFit: "cover" }} 
          />
        </div>

      </main>
    </div>
  );
}
