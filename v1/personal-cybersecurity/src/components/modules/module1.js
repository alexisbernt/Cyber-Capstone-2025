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


        {/* Right-side Hero Section */}
        <div className="split-right flex items-center justify-center p-10">
          <img 
              src="/text-mod1.png"  
              alt="Right-side Image"  
              className="split-image"
            />
        </div>
        </div>

        <div style={{ width: '100%' }}>
          <ThinCard
            titleText="Watch this video if you want to see nerds dance: "
            />
        </div>

        <Divider/> <br/> 

        <div className="split-container">
          <div className="split-left w-1/2 flex items-center justify-center bg-white">
            <img 
              src="/text-mod1ab.png"  
              alt="Left-side Image"  
              className="split-image"
            />
          </div>

          <div className="split-right w-1/2 flex items-center justify-center bg-gray-200 p-5">
            <div className="relative w-full max-w-3xl aspect-video bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center booklet-wrapper">
              <Booklet />
            </div>
          </div>
        </div>


        {/* --------- Learning Steps Start -----------------------------------------------------------------*/}
       
        <div style={{ width: '100%' }}>
          <ThinCard
            titleText="The 3 Steps! "
            />
        </div>

        <Divider/>

        <GridPattern />

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