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
import RevealCard from "../reveal";
import SeparatorCard from "../separatorCard";

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
      <div className="card-container">
        {/* Navigation Buttons */}
        <div className="card-wrapper">
        {/* Left-side Card */}
        <Link to="/modules">
          <RevealCard
            imageUrl="/enforce.png"
            imageAlt="Module Image"
            titleText="Learn"
            revealInfo="Learning modules teach you the fundamentals of cybersecurity."
          />
        </Link>
        </div>

        {/* Middle-side Card */}
        <div className="card-wrapper">
        <Link to="/resources">
          <RevealCard
            imageUrl="/enforce.png"
            imageAlt="Resources Image"
            titleText="Resources"
            revealInfo="Explore the resouces avaliable on this site"
          />
        </Link>
        </div>

        <div className="card-wrapper">
        {/* Middle-side Card */}
        <Link to="/pricing">
          <RevealCard
            imageUrl="/enforce.png"
            imageAlt="Login Image"
            titleText="Login"
            revealInfo="Create your personal cybersecurity account"
          />
        </Link>
        </div>

        {/* Right-side Card */}
        <div className="card-wrapper">
        <Link to="/blog">
          <RevealCard
            imageUrl="/enforce.png"
            imageAlt="Blog Image"
            titleText="Blog"
            revealInfo="Check out updated blog posts"
          />
        </Link>
        </div>
      </div>

      <div cardClassName="separator-card2" >
        <SeparatorCard cardClassName="separator-card2"
          imageUrl="/proud-cyber-nerd.png"
          imageAlt="Cyber Nerd Graphic"
          titleText="Earn your badge of NERDom today"
          paragraphText="Get ahead of online threats by learning practices that will keep you safe when using technology. If you earn your cybersecurity nerd badge, you'll be ahead of the game."
        />
      </div>

        {/* Divider Image & Clickable Link
        <div className="w-full">
          <Link to="/pricing">
            <img 
              src="/banner2.png" 
              alt="Enter to Win" 
              style={{ width: "100%", height: "430px", objectFit: "cover" }} 
            />
          </Link>
        </div> */}

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
