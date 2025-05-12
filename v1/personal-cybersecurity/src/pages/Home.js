// top clickable button 
// button colors 

// import Header from "../components/Header";
import { Link } from "react-router-dom"; 
import HorizontalShowcase from "../components/layout/home/HorizontalShowcase";
import '../App.css';
import { useState } from "react";
import RevealCard from "../reveal";
import SeparatorCard from "../separatorCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export default function Home() {
  const [name, setName] = useState('');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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

      {/* Website Descriptor */}
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        maxWidth: "850px",
        margin: "40px auto",
        padding: "0 20px",
        color: "black",
      }}
    >
      <h1 style={{ fontSize: "2em", fontWeight: "bold", marginBottom: "20px" }}>
        Welcome To Cyber Club!
      </h1>
      <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
        This website is meant to help users learn about cybersecurity and how to stay safe online.
      </p>
    </motion.div>

      <main>
      <div className="card-container">
        {/* Navigation Buttons */}
        <div className="card-wrapper">
        {/* Left-side Card */}
        <Link to="/modules">
          <RevealCard
            imageUrl="/learn.png"
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
            imageUrl="/resources.png"
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
            imageUrl="/lock3.png"
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
            imageUrl="/blog.png"
            imageAlt="Blog Image"
            titleText="Blog"
            revealInfo="Check out updated blog posts"
          />
        </Link>
        </div>
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
        <Link to="/pricing">
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

      <div cardClassName="separator-card2" >
        <SeparatorCard cardClassName="separator-card2"
          imageUrl="/proud-cyber-nerd.png"
          imageAlt="Cyber Nerd Graphic"
          titleText="Earn your badge of NERDom today"
          paragraphText="Get ahead of online threats by learning practices that will keep you safe when using technology. If you earn your Cybersecurity Nerd Badge, you'll be ahead of the game."
        />
      </div>

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
