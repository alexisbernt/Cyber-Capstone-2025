import '../css-sections/about.css';
import arrowupright from "../assets/arrow-up-right.svg";

function AboutUs() {
  return (
    <div className="about-page-container">
      {/* Left: Text Card */}
      <div className="login-card about-card">
        <div className="about-content">
          <p className="login-subtitle">
            About Cyber Club / 01000011 01111001 01100010 01100101 01110010 01110011 01100101 01100011 01110101 01110010 01101001 01110100 01111001
          </p>
          <h1 className="login-title">The Goal of LCC</h1>
          <p className="sushi__description">
            The mission of <em>Lexi's Cyber Club</em> is to bring you cybersecurity knowledge that will help you personally and get you to live with ease.
          </p>
          <a href="http://localhost:3000/modules" className="login-button about-button">
            Learn More
            <img src={arrowupright} alt="Arrow" className="about-arrow" />
          </a>
        </div>
      </div>

      {/* Right: Video Card */}
      <div className="login-card about-card">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/bCu3qh7xXzQ?si=T6cbYKSdSnGEHBFJ"
            title="Cybersecurity Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


// const AboutUs = () => {
//   return (
//     <section className="about-us" id="about-us">
//       <div className="about-us__image">
//         <div className="about-us__image-sushi3">
//           <img src={deviceImage1} alt="computer" data-aos="fade-right" />
//         </div>

//         <button className="about-us__button">
//           Learn More
//           <img src={arrowupright} alt="learn more" />
//         </button>

//         <div className="about-us__image-sushi2">
//           <img src={deviceImage2} alt="iPad" data-aos="fade-right" />
//         </div>
//       </div>

//       <div className="about-us__content" data-aos="fade-left">
//         <p className="sushi__subtitle">About Us / 私たちに関しては</p>
//         <h3 className="sushi__title">Our mission is to bring true Japanese flavours to you.</h3>
//         <p className="sushi__description">
//           We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// import Hero from "../components/layout/home/Hero";
// import Features from "../components/layout/home/Features";
// import ProductShowcase from "../components/layout/home/ProductShowcase";
// import SignUpPage from "./Pricing";

// export default function Home() {
//   return (
//     <div className="bg-black min-h-screen">
//       {/* <Header /> */}
//       <main>
//         <Hero />
//         <Features />
//         <ProductShowcase />
//       </main>
//     </div>
//   );
// }