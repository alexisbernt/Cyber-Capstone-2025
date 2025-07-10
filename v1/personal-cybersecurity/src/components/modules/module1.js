import Features from "../../components/layout/home/Features";
import Definitions from "../layout/home/Definitions";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { Divider } from "../ui/divider-pattern";
// import ColorPattern from "../color-pattern";
import ThinCard from "../../ThinCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

const Banner = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={() => navigate("/blog/why-cybersecurity")}
      style={{
        maxWidth: "850px",
        margin: "60px auto",
        padding: "40px 30px",
        backgroundColor: "#2c2c2c",
        borderRadius: "16px",
        color: "#ffffff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        cursor: "pointer"
      }}
    >
      <h1 style={{ fontSize: "2.5em", fontWeight: "700", marginBottom: "20px", color: "#e0e0e0" }}>
        Module 1: Fundamentals of Cybersecurity
      </h1>
      <p style={{ fontSize: "1.2em", lineHeight: "1.8", color: "#e0e0e0" }}>
        Discover why cybersecurity is one of the most crucial areas of tech today.
        Continue if you want to be a Cybersecurity Ninja!
      </p>
    </motion.div>
  );
};

export default function Module1() {
  return (
    // The Header Section
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image
        <div className="w-full">
          <img 
            src="/module1_banner.png" 
            alt="Banner"  
            style={{ width: "100%", height: "405px", objectFit: "cover" }} 
          />
        </div> */}

        <Banner/>

        <Divider/>
        {/* <GridPattern/> */}
        
        {/* Flex Container for Left Image & Right Hero Section */}
        <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/mod1-graphic1.gif"  
            alt="Right-side Image"  
            className="split-image"
          />
        </div>


        {/* Right-side Text Section Card */}
        <div className="split-right-card">
          <Link to="/signin" className="card-link">
            <h2>THE WHY OF THIS SECTION:</h2>
            <p>
              Cybersecurity saves us money, time, and an unnecessary headache.

              Learning how to be tech-savvy with personal cybersecurity skills goes a long way.

              Follow along this step-by-step quick module to learn more.
            </p>
          </Link>
        </div>
        </div>

        {/* Upper-side Text Section Card followed by video*/}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          
          {/* Thin Card Centered */}
          <div style={{ width: '90%', maxWidth: '850px', marginBottom: '40px' }}>
            <ThinCard
              titleText="Watch this video if you want to see nerds dance: "
            />
          </div>

          {/* Video Section Centered */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '1000px',
              width: '100%',
              padding: '20px',
              boxSizing: 'border-box'
            }}
          >
            {/* Left Text Block */}
            <div
              style={{
                backgroundColor: '#2c2c2c',
                color: 'white',
                borderRadius: '16px',
                padding: '30px',
                marginBottom: '30px',
                textAlign: 'center',
                width: '100%',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
              }}
            >
              <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2>WATCH THINGS IN VIDEO FORM</h2>
                <p>
                  Pictures and words are cool. Pictures and words combined to be a cinematic masterpiece is cooler. Give watching this video a try.
                </p>
              </Link>
            </div>

            {/* Video Container */}
            <div
              style={{
                width: '100%',
                maxWidth: '768px',
                aspectRatio: '16 / 9',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Booklet />
            </div>
          </div>
        </div>



        {/* --------- Learning Steps Start -----------------------------------------------------------------*/}
       
        <Divider/>

        <GridPattern />
        {/* Thin Card Centered */}
        <div style={{ 
          width: '90%', 
          maxWidth: '850px', 
          margin: '0 auto 40px auto' // Top: 0, Bottom: 40px, Auto left/right
        }}>
          <ThinCard
            titleText="THE THREE STEPS: "
          />
        </div>

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Step 1: Let's start things off with some definitions!
          </h1>
        </div>

        <Divider/> <br/>

        <Definitions/>

        <GridPattern />

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Step 2: Test your knowledge by playing this drag and drop game!
          </h1>
        </div>
        <Divider/> <br/>
        <DragDropGame/>
        <GridPattern />
        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Step 3: Start Implementing Cybersecurity Into Your Day-To-Day!
          </h1>
          <Divider/> <br/>
        </div>
        <Features />

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