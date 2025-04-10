import Features from "../../components/layout/home/Features";
import Definitions from "../layout/home/Definitions";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { Divider } from "../ui/divider-pattern";
import ColorPattern from "../color-pattern";
import { useNavigate } from "react-router-dom";

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

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center py-6">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center text-white">
            <br/> <br/>
            Welcome to Cybersecurity Learning Module #1!
          </h1>
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
          {/* <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            The Why of This Section: 
          </h1>
          <br /> <br />
          <p className="text-3xl font-bold font-[Poppins] text-center mt-6">
            <span className="text-blue-600">
              Cybersecurity saves us money, time, and an unnecessary headache.
            </span>
            <br /> <br />
            Learning how to be tech-savvy through personal cybersecurity skills goes a long way.
            <br /> <br />
            Follow along this step-by-step to learn more.
          </p> */}
          <img 
              src="/text-mod1.png"  
              alt="Right-side Image"  
              className="split-image"
            />
        </div>
        </div>

        {/* Flex Container for Left Video Text Descriptor & Right Video*/}
        <div className="split-container">
        {/* Left-side Image/Text */}
        <div className="split-left">
          <img 
            src="/text-mod1a.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>
        {/* Right-side Video (Booklet) Section */}
        <div className="split-right flex items-center justify-center p-10">
          <Booklet/>
        </div>
        </div>

        {/* --------- Learning Steps Start -----------------------------------------------------------------*/}
       
        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
             3 Steps!
          </h1>
          <Divider/>
          <br/> <br/> <br/>
        </div>

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Step 1: Let's start things off with some definitions!
          </h1>
        </div>

        <Divider/>

        <GridPattern />

        <Definitions/>

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            <br/> <br/> <br/>
            Step 2: Test your knowledge by playing this drag and drop game!
          </h1>
        </div>

        <Divider/>

        <GridPattern />
        <DragDropGame/>

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            <br/> <br/> <br/>
            Step 3: Start Implementing Cybersecurity Into Your Day-To-Day!
          </h1>
          <Divider/>
        </div>
        <GridPattern />
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