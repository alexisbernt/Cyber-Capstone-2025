// import Hero from "../../components/layout/home/Hero";
// import Features from "../../components/layout/home/Features";
// import Booklet from "../ui/BookletMod1";
// import DragDropGame from "../ui/DragDrop";
// import GridPattern from "../patterns";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import RevealCard from "../../reveal"; // this is the component
import SeparatorCard from "../../separatorCard";

export default function Module3() {
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // You can still use this for non-React elements if needed
    // But now we're handling the custom card via JSX directly
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <main>
        {/* Banner Image */}
        <div className="w-full">
          <img
            src="/module3_banner.png"
            alt="Banner"
            style={{ width: "100%", height: "405px", objectFit: "cover" }}
          />
        </div>

        <div className="card-row">
          {/* Left-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption & Cryptography"
              revealInfo="In this module, we explore the foundations of encryption..."
            />
          </div>

          {/* Middle-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Middle Image"
              titleText="Cryptography (Kinda)"
              revealInfo="Dive into the logic and algorithms that power encryption: primes, modulo, and more."
            />
          </div>

          {/* Right-side Card */}
          <div className="card-wrapper">
            <RevealCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption (Kinda)"
              revealInfo="Learn how encryption is used in messaging, security protocols, and everyday apps."
            />
          </div>
        </div>

        {/* Separator Card */}

          <div style={{ width: '100%' }} className="card-wrapper">
            <SeparatorCard
              imageUrl="/enforce.png"
              imageAlt="Encryption Image"
              titleText="Encryption (Kinda)"
              paragraphText="Learn how encryption is used in messaging, security protocols, and everyday apps."
            />
          </div>

          <div style={{ width: '100%' }}>
            <SeparatorCard
              imageUrl="/banner-wide.png"
              imageAlt="Wide Graphic"
              titleText="Need a Break?"
              paragraphText="This is a full-width separator card that gives you a moment to reflect."
            />
          </div>

        {/* Reveal Card insert w/ Separator Card following */}
        <div ref={cardContainerRef}></div>
      </main>
    </div>
  );
}
