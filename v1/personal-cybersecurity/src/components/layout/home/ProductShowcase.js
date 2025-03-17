import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import GridPattern from "../../patterns";
import Button from "../../ui/Button"; // Ensure this imports the correct Button component

const images = [
  "/mountains.png",
  "/oregon.png",
  "/sun.png"
];

function ProductShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden font-verdana">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
            Built for Modern Enterprises
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed tracking-wide">
            Experience a new way of working with our intuitive interface and powerful features.
          </p>
        </motion.div>

        <div className="relative w-full max-w-2xl mx-auto flex items-center">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 bg-white/30 text-white p-2 rounded-full ml-2"
          >
            ◀
          </button>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Slideshow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-lg shadow-lg"
          />
          <button 
            onClick={nextSlide} 
            className="absolute right-0 bg-white/30 text-white p-2 rounded-full mr-2"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-10 backdrop-blur-xl border border-gray-800 shadow-2xl">
            <svg
              viewBox="0 0 800 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Simplified UI wireframe */}
              {/* <rect x="40" y="40" width="720" height="60" rx="8" fill="rgba(255,255,255,0.1)" />
              <rect x="60" y="55" width="120" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
              <rect x="40" y="120" width="300" height="340" rx="8" fill="rgba(255,255,255,0.1)" />
              <rect x="360" y="120" width="400" height="340" rx="8" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div> */}

          {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-[10%] bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" /> */}
        {/* </motion.div> */} 
        {/*} */} 

       