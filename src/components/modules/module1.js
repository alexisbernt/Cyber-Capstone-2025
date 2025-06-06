import Features from "../../components/layout/home/Features";
import Definitions from "../layout/home/Definitions";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { Divider } from "../ui/divider-pattern";
import ColorPattern from "../color-pattern";
import { useNavigate } from "react-router-dom";
import ThinCard from "../../ThinCard";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <img 
        src="/module1-starter.png" 
        alt="Banner"  
        style={{ width: "100%", height: "705px", objectFit: "cover", cursor: "pointer" }} 
        onClick={() => navigate("/blog/why-cybersecurity")}
      />
    </div>
  );
};

export default function Module1() {
  return (
    // The Header Section
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image */}
        <div className="w-full">
          <img 
            src="/module1_banner.png" 
            alt="Banner"  
            style={{ width: "100%", height: "405px", objectFit: "cover" }} 
          />
        </div>

        {/* Divider of Text Section
        <div className="flex items-center justify-center py-6">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center text-white">
            <br/> <br/>
            Welcome to Cybersecurity Learning Module #1!
          </h1>
        </div> */}

        <div style={{ width: '100%' }}>
          <ThinCard
            titleText="Welcome to Cybersecurity Learning Module #1! "
            />
        </div>

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