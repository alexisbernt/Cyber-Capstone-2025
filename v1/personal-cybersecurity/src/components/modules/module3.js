import Hero from "../../components/layout/home/Hero";
import Features from "../../components/layout/home/Features";
import Booklet from "../ui/BookletMod1";
import DragDropGame from "../ui/DragDrop";
import GridPattern from "../patterns";
import { useNavigate } from "react-router-dom";

// Banner Component
const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <img 
        src="/module-2.png" 
        alt="Banner"  
        style={{ width: "100%", height: "705px", objectFit: "cover", cursor: "pointer" }} 
        onClick={() => navigate("/blog/why-cybersecurity")}
      />
    </div>
  );
};

export default function Module2() {
  return (
    <div className="bg-black min-h-screen">
      <main>

      <div className="w-full">
      <img 
      >

      </main>
      </div>
  )
}
