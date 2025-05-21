import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
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

//   const isActive = (path: string) => location === path;

  return (
    <motion.header
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold text-white cursor-pointer">
            SaaS<span className="text-primary">Hub</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/resources">
            <span className={`cursor-pointer transition-colors ${
              isActive("/resources") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Resources
            </span>
          </Link>
          <Link href="/signin">
            <span className={`cursor-pointer transition-colors ${
              isActive("/signin") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Pricing
            </span>
          </Link>
          <Link href="/blog">
            <span className={`cursor-pointer transition-colors ${
              isActive("/blog") ? "text-white" : "text-gray-300 hover:text-white"
            }`}>
              Blog
            </span>
          </Link>
        </nav>

        <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
          Get Started
        </Button>
      </div>
    </motion.header>
  );
}