
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.js";
import "./index.css";

// ReactDOM.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
//   // document.getElementById("root")
// );

// Create the head section
document.head.innerHTML = `
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <link rel='icon' type='image/png' href='/sushi.png'>
  <link rel='stylesheet' href='css/style.css'>
  <title>Sushiman</title>
`;

// Create the body content dynamically
const body = document.body;
body.innerHTML = `
  <header>
    <nav class='header__nav'>
      <div class='header__logo'>
        <h4 data-aos='fade-down'>Sushiman</h4>
        <div class='header__logo-overlay'></div>
      </div>
      <ul class='header__menu' data-aos='fade-down'>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#food'>Food</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#about-us'>About Us</a></li>
        <li><img src='assets/search.svg' alt='search'></li>
      </ul>
      <ul class='header__menu-mobile' data-aos='fade-down'>
        <li><img src='assets/menu.svg' alt='menu'></li>
      </ul>
    </nav>
  </header>

  <section class='hero'>
    <div class='hero-image'>
      <img src='assets/sushi-1.png' alt='sushi' data-aos='fade-up'>
      <h2 data-aos='fade-up'>日 <br /> 本 <br /> 食</h2>
      <div class='hero-image__overlay'></div>
    </div>
    <div class='hero-content'>
      <div class='hero-content-info' data-aos='fade-left'>
        <h1>Feel the taste of Japanese food</h1>
        <p>Feel the taste of the most popular Japanese food from anywhere and anytime.</p>
        <div class='hero-content__buttons'>
          <button class='hero-content__order-button'>Order Now</button>
          <button class='hero-content__play-button'>
            <img src='assets/play-circle.svg' alt='play'> How to Order
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class='about-us' id='about-us'>
    <div class='about-us__image'>
      <div class='about-us__image-sushi3'>
        <img src='assets/sushi-3.png' alt='sushi' data-aos='fade-right'>
      </div>
      <button class='about-us__button'>Learn More
        <img src='assets/arrow-up-right.svg' alt='learn more'>
      </button>
      <div class='about-us__image-sushi2'>
        <img src='assets/sushi-2.png' alt='sushi' data-aos='fade-right'>
      </div>
    </div>
    <div class='about-us__content' data-aos='fade-left'>
      <p class='sushi__subtitle'>About Us / 私たちに関しては</p>
      <h3 class='sushi__title'>Our mission is to bring true Japanese flavours to you.</h3>
      <p class='sushi__description'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
    </div>
  </section>

  <section class='subscription flex-center' id='services'>
    <h2 data-aos='flip-down'>Get offers straight <br /> to your inbox</h2>
    <p data-aos='fade-up'>Sign up for the Sushiman newsletter</p>
    <div class='subscription__form' data-aos='fade-up'>
      <input type='text' placeholder='Enter your email address'>
      <button>Get Started</button>
    </div>
  </section>

  <footer class='footer flex-between'>
    <h3 class='footer__logo'><span>Sushi</span>man</h3>
    <ul class='footer__nav'>
      <li><a href='#menu'>Menu</a></li>
      <li><a href='#food'>Food</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#about-us'>About Us</a></li>
    </ul>
    <ul class='footer__social'>
      <li class='flex-center'><img src='assets/facebook.svg' alt='facebook'></li>
      <li class='flex-center'><img src='assets/instagram.svg' alt='instagram'></li>
      <li class='flex-center'><img src='assets/twitter.svg' alt='twitter'></li>
    </ul>
  </footer>

  <script src='js/script.js' type='module'></script>
`;
