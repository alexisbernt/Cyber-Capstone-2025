import { useState, useEffect } from "react"; 
import { Link, useLocation } from "wouter";
import Button from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

function Header() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location === path;

  return (
    <motion.header
      style={{ background }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white cursor-pointer">
          SaaS<span className="text-primary">Hub</span>
        </Link>

        {/* Navigation with Images */}
        <nav role="navigation" className="hidden md:flex items-center space-x-8">
          {["/resources", "/pricing", "/blog"].map((path, index) => (
            <Link
              key={path}
              href={path}
              className={`cursor-pointer transition-colors ${
                isActive(path) ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              <img
                src={`/images/image${index + 1}.png`} // Assuming images are in the public/images/ folder
                alt={`Nav Icon ${index + 1}`}
                className="nav-icon"
              />
            </Link>
          ))}
        </nav>

        <Button variant="secondary">Get Started</Button>
      </div>
    </motion.header>
  );
}
export default Header;
