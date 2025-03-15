
import '../css-sections/about.css';
import deviceImage1 from "../assets/device-2.png"
import deviceImage2 from "../assets/device-3.png"
import arrowupright from "../assets/arrow-up-right.svg"


const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__image" style={{ position: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="about-us__image-sushi3">
          <img src={deviceImage1} alt="computer" data-aos="fade-right" />
        </div>

        <button className="about-us__button" style={{
          position: 'absolute',
          background: 'black',
          border: '2px solid var(--secondary-color)',
          borderRadius: '50%',
          width: '180px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          Learn More
          <img src={arrowupright} alt="learn more" />
        </button>

        <div className="about-us__image-sushi2">
          <img src={deviceImage2} alt="iPad" data-aos="fade-right" />
        </div>
      </div>

      <div className="about-us__content" data-aos="fade-left">
        <p className="sushi__subtitle">About Us / 私たちに関しては</p>
        <h3 className="sushi__title">Our mission is to bring true Japanese flavours to you.</h3>
        <p className="sushi__description">
          We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.
        </p>
      </div>
    </section>
  );
};

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