import Features from "../../components/layout/home/Features";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import PhotoPattern from "../ui/pattern-photos";
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
    <div className="bg-black min-h-screen">
      {/* <Header /> */}
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
        <div className="flex items-center justify-center p-10">
        <br /> <br />
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Welcome to Cybersecurity Learning Module #1!
          </h1>
          <br /> <br />
        </div>

        {/* <GridPattern/> */}
        <PhotoPattern />
        
        {/* Flex Container for Left Image & Right Hero Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
        <Booklet/>
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
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
          </p>
        </div>
        </div>

        {/* Divider of Text Section */}
        <div className="flex items-center justify-center p-10">
          <h1 className="text-6xl font-extrabold font-[Poppins] text-center">
            Let's start things off with some definitions!
          </h1>
          <br /> <br />
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
        <DragDropGame/>
        <Banner/>
        <Features />
      </main>
      </div>
  );
}