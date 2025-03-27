import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
// import GridPattern from "../../patterns";
// import Button from "../../ui/Button"; // Ensure this imports the correct Button component

const images = [
  "discover.png",
  "/lengthen.png",
  "/conceal.png",
  "/enforce.png"
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
            className="w-[1200px] h-[800px] object-cover rounded-lg shadow-lg"
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
