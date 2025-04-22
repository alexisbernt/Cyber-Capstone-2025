// import Hero from "../../components/layout/home/Hero";
// import Features from "../../components/layout/home/Features";
// import Booklet from "../ui/BookletMod1";
// import DragDropGame from "../ui/DragDrop";
// import GridPattern from "../patterns";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import createRevealCard from "../../reveal"; 
import createSeparatorCard from "../../separatorCard";

export default function Module3() {
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cardElement = createRevealCard();
    const separatorCard = createSeparatorCard();
  
    if (cardContainerRef.current) {
      cardContainerRef.current.appendChild(cardElement); // Image card
      cardContainerRef.current.appendChild(separatorCard); // Separator card
    }
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image */}
        <div className="w-full">
          <img
            src="/module2_banner.png"
            alt="Banner"
            style={{ width: "100%", height: "405px", objectFit: "cover" }}
          />
        </div>

        {/* Plain card */}
        <div className="card-container">
          <div className="custom-card">
            <div className="card-content">
              <h2 className="card-title">Card Title</h2>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        {/* Reveal Card insert w/ Separator Card following*/}
        <div ref={cardContainerRef}></div>
      </main>
    </div>
  );
}
