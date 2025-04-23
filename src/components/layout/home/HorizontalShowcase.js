import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const images = [
  "/bubbles1.png",
  "/bubbles2.png"
];

function HorizontalShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      ref={ref}
      className="relative py-16 bg-black overflow-hidden font-verdana"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          {/* Optional heading or text */}
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-2 bg-white/30 text-white p-2 rounded-full z-10"
          >
            {/* ◀ */}
          </button>

          <div className="w-full h-48 overflow-hidden rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Slideshow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 bg-white/30 text-white p-2 rounded-full z-10"
          >
            {/* ▶ */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HorizontalShowcase;
