import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <header>
        <nav className="header__nav">
          <div className="header__logo">
            <h4 data-aos="fade-down">Sushiman</h4>
            <div className="header__logo-overlay"></div>
          </div>
          <ul className="header__menu" data-aos="fade-down">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#food">Food</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><img src="/assets/search.svg" alt="search" /></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image">
          <img src="/assets/sushi-1.png" alt="sushi" data-aos="fade-up" />
          <h2 data-aos="fade-up">日 <br /> 本 <br /> 食</h2>
          <div className="hero-image__overlay"></div>
        </div>
        <div className="hero-content" data-aos="fade-left">
          <h1>Feel the taste of Japanese food</h1>
          <p>Feel the taste of the most popular Japanese food from anywhere and anytime.</p>
          <button className="hero-content__order-button">Order Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;
