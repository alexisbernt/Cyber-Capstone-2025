import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
// import GridPattern from "../components/ui/GridPattern";
import RevealCard from "../reveal";
import SeparatorCard from "../separatorCard";
import HorizontalShowcase from "../components/layout/home/HorizontalShowcase";
import "../App.css";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div className="home-screen">
      {/* <Header /> */}
      {/* <GridPattern /> */}

      <main className="main-content">
        {/* Welcome Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="intro-text"
        >
          <h1>Working?</h1>
          <p>
            {name ? `${name}, g` : "G"}et ready to explore the world of
            cybersecurity!
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="feature-cards">
          <Link to="/modules">
            <RevealCard
              imageUrl="/learn.png"
              titleText="Learn"
              revealInfo="Learn cybersecurity fundamentals"
            />
          </Link>
          <Link to="/resources">
            <RevealCard
              imageUrl="/resources.png"
              titleText="Resources"
              revealInfo="Explore cybersecurity tools"
            />
          </Link>
          <Link to="/signin">
            <RevealCard
              imageUrl="/lock3.png"
              titleText="Login"
              revealInfo="Create your account"
            />
          </Link>
          <Link to="/blog">
            <RevealCard
              imageUrl="/blog.png"
              titleText="Blog"
              revealInfo="Read expert articles"
            />
          </Link>
        </div>

        {/* Split Section 1 */}
        <div className="split-section">
          <img src="/home-image.png" alt="Cyber Visual 1" />
          <Link to="/modules">
            <img
              src="/starter-text.png"
              alt="Get Started"
              className="clickable-image"
            />
          </Link>
        </div>

        {/* Split Section 2 */}
        <div className="split-section reverse">
          <Link to="/modules">
            <img
              src="/starter-text2.png"
              alt="Continue Learning"
              className="clickable-image"
            />
          </Link>
          <img src="/home-image2.png" alt="Cyber Visual 2" />
        </div>

        {/* Showcase Section */}
        <div className="showcase-section">
          <HorizontalShowcase />
        </div>

        {/* Separator Card */}
        <SeparatorCard
          cardClassName="separator-card2"
          imageUrl="/proud-cyber-nerd.png"
          imageAlt="Cyber Nerd Graphic"
          titleText="Earn your badge of NERDom today"
          paragraphText="Master your cybersecurity skills and earn your place as a Cybersecurity Nerd!"
        />

        {/* Footer Banner */}
        <div className="footer-banner">
          <img
            src="/bottom-banner.png"
            alt="Cybersecurity Footer"
            className="footer-image"
          />
        </div>
      </main>
    </div>
  );
}
