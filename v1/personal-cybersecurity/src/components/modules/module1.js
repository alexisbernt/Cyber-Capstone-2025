import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";
import Booklet from "../ui/Booklet";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";

export default function Module1() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
      <main>
        {/* Banner Image */}
      <div className="w-full">
        <img 
          src="/module1_banner.png" 
          alt="Banner"  
          style={{ width: "100%", height: "345px", objectFit: "cover" }} 
        />
        </div>

        {/* <GridPattern /> */}
        
        {/* Flex Container for Left Image & Right Hero Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/three-why.png"  
            alt="Left-side Image"  
            className="split-image"
            style={{ width: "96%", height: "700px", objectFit: "cover" }} 
          />
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right">
          <Hero />
        </div>
      </div>

      {/* <GridPattern /> */}

        <div className="w-full">
        <img 
          src="/definitions-mod1.png" 
          alt="Banner"  
          style={{ width: "98%", height: "705px", objectFit: "cover" }} 
        />
        </div>
        <GridPattern />
        <Booklet/>
        <GridPattern />
        <DragDropGame/>
        <div className="w-full">
        <img 
          src="/whereUse-mod1.png" 
          alt="Banner"  
          style={{ width: "100%", height: "705px", objectFit: "cover" }} 
        />
        </div>
        <Hero />
        <Features />
      </main>
      </div>
  );
}