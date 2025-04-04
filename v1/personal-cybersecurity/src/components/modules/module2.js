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

      <div className="container">
      {/* Left Side - Image */}
      <div className="left">
        <img
          src="/bitwarden-phone.png"
          alt="Password Hashing Illustration"
          className="image"
        />
      </div>

      {/* Right Side - Text */}
      <div className="right">
        <h2>Passwords are hashed.</h2>
        <p>
          This means that there is a one-way process where a password gets
          converted into a fixed-length number of characters (hash) using a
          cryptographic algorithm. The original password cannot be retrieved
          from the hash.
        </p>
        <p>
          Then, when a user logs in, the system hashes the entered password and
          checks if it matches the stored hash.
        </p>
        <p>
          The more characters in a password, the more possible combinations
          exist, making it harder to crack.
        </p>
      </div>
    </div>

        {/* Additional Sections */}
        <GridPattern />
        <Booklet />
        <GridPattern />
        <DragDropGame />
        <Banner />
        <Hero />
        <Features />

      </main>
    </div>
  );
}
