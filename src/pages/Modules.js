// Modules is the "Learn" Button on the Home Screen 
import Hero from "../components/layout/home/Hero";
import Features from "../components/layout/home/Features";
import { Link } from "react-router-dom"; 

export default function Modules() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
      {/* Need to put in banner / header graphic of some sort */}
      <main>
      {/* Navigation Buttons for Modules Page */}
      <div className="nav-buttons-container">
      <Link to="/module1">
          <button className="nav-button-modules">Module 1: What is "Personal Cybersecurity" & Why Learn It?</button> 
        </Link>
        <Link to="/resources">
          <button className="nav-button-modules">Module 2: The Types of Cyberattacks That Get Personal</button>
        </Link>
        <Link to="/signin">
          <button className="nav-button-modules">Sign-up</button> 
        </Link>
        <Link to="/blog">
          <button className="nav-button-modules">Blog</button>
        </Link>
      </div>
        <Hero />
        <Features />
      </main>
    </div>
  );
}