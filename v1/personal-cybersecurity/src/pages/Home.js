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
          <p className="text-3xl font-bold font-[Poppins] text-center mt-6">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            The Why of This Section: 
          </h1>
          <br /> <br />
            <span className="text-blue-600">
              Cybersecurity saves us money, time, and an unnecessary headache.
            </span>
            <br /> <br />
            Learning how to be tech-savvy through personal cybersecurity skills goes a long way.
            <br /> <br />
            Follow along this step-by-step to learn more.
          </p>
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
