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

      {/* Flex Container for Left Image & Right Content Section */}
      <div className="split-container">
        {/* Left-side Image */}
        <div className="split-left">
          <img 
            src="/bitwarden-computer.png"  
            alt="Left-side Image"  
            className="split-image"
          />
        </div>

        {/* Right-side Hero Section */}
        <div className="split-right">
        <p>
        <h2>Passwords are hashed.</h2> <br />
          This means that there is a one-way process where a password gets
          converted into a fixed-length number of characters (hash) using a
          cryptographic algorithm. The original password cannot be retrieved
          from the hash.
          Then, when a user logs in, the system hashes the entered password and
          checks if it matches the stored hash.
          The more characters in a password, the more possible combinations
          exist, making it harder to crack.
        </p>
        </div>
      </div>

      {/* Flex Container for Left Image & Right Content Section */}
      <div className="split-container">
        {/* Left-side Content */}
        <div className="split-left">
        <p>
        <h2>Selecting a Good Password.</h2> <br />
        The more characters in a password, the more possibility of combinations. 
        You want to create passwords that are 12 to 18 characters in length. This means that for better password protection and management, 
        it is recommended to use a password manager. 
        A common password manager is Bitwarden. 
        Bitwarden is suitable on phones and computers (basically any device that you want to use).
        </p>
        </div>

        {/* Right-side Image Section */}
        <div className="split-right">
        <img 
            src="/bitwarden-phone.png"  
            alt="Left-side Image"  
            className="split-image"
          />
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
