// top clickable button 
// button colors 

// import Header from "../components/Header";
import { Link } from "react-router-dom"; 
import HorizontalShowcase from "../components/layout/home/HorizontalShowcase";
import '../App.css';
import { useState } from "react";
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
      <div>
        <img 
          src="/banner_lcc.png" 
          alt="Banner"  
          className="banner-image"
        />
      </div>
  
      {/* Website Descriptor */}
      <div className="frozen-container" style={{ color: "black", marginTop: "40px", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>
          Welcome To Cyber Club!
        </h1>
        <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
          This website is meant to help users learn about cybersecurity and how to stay safe online.
        </p>
      </div>
  
      <main>
  
      {/* Navigation Cards */}
      <div className="card-container">
        <div className="card-wrapper">
          <Link to="/modules">
            <RevealCard
              imageUrl="/learn.png"
              imageAlt="Module Image"
              titleText="Learn"
              revealInfo="Learning modules teach you the fundamentals of cybersecurity."
            />
          </Link>
        </div>
        <div className="card-wrapper">
          <Link to="/resources">
            <RevealCard
              imageUrl="/resources.png"
              imageAlt="Resources Image"
              titleText="Resources"
              revealInfo="Explore the resources available on this site"
            />
          </Link>
        </div>
        <div className="card-wrapper">
          <Link to="/signin">
            <RevealCard
              imageUrl="/lock3.png"
              imageAlt="Login Image"
              titleText="Login"
              revealInfo="Create your personal cybersecurity account"
            />
          </Link>
        </div>
        <div className="card-wrapper">
          <Link to="/blog">
            <RevealCard
              imageUrl="/blog.png"
              imageAlt="Blog Image"
              titleText="Blog"
              revealInfo="Check out updated blog posts"
            />
          </Link>
        </div>
      </div>

      {/* Split Section 1 */}
      <div className="split-container">
        <div className="split-left">
          <img src="/home-image.png" alt="Left-side Image" className="split-image" />
        </div>
        <div className="split-right">
          <Link to="/modules">
            <img src="/starter-text.png" alt="Right-side Text" className="split-image" />
          </Link>
        </div>
      </div>

      {/* Split Section 2 */}
      <div className="split-container">
        <div className="split-right">
          <Link to="/modules">
            <img src="/starter-text2.png" alt="Right-side Text" className="split-image" />
          </Link>
        </div>
        <div className="split-left">
          <img src="/home-image2.png" alt="Left-side Image" className="split-image" />
        </div>
      </div>

      {/* Showcase Section */}
      <div className="frozen-container">
        <HorizontalShowcase />
      </div>

      {/* Separator Card */}
      <div className="separator-card2">
        <SeparatorCard
          cardClassName="separator-card2"
          imageUrl="/proud-cyber-nerd.png"
          imageAlt="Cyber Nerd Graphic"
          titleText="Earn your badge of NERDom today"
          paragraphText="Get ahead of online threats by learning practices that will keep you safe when using technology. If you earn your Cybersecurity Nerd Badge, you'll be ahead of the game."
        />
      </div>

      {/* Final Banner */}
      <div>
        <img 
          src="/bottom-banner.png" 
          alt="Cybersecurity"  
          className="bottom-banner"
        />
      </div>

    </main>
  </div>
);
}