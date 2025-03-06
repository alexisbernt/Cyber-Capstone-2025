import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";
import DragDropGame from "../ui/DragDrop";

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
        {/* Add spacing -- adjust dimensions  */}
        <div className="w-full">
        <img 
          src="/module1-starter.png" 
          alt="Banner"  
          style={{ width: "100%", height: "705px", objectFit: "cover" }} 
        />
        </div>
        <div className="w-full">
        <img 
          src="/definitions-mod1.png" 
          alt="Banner"  
          style={{ width: "100%", height: "705px", objectFit: "cover" }} 
        />
        </div>
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