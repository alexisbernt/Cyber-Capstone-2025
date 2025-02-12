import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GridPattern from "../../patterns"; 


function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Ensure GridPattern is correctly positioned */}
      <div className="absolute inset-0 pointer-events-none">
        <GridPattern />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Built for Modern Enterprises
          </h2>
          <p className="text-gray-400 text-lg">
            Experience a new way of working with our intuitive interface and powerful features.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-8 backdrop-blur-xl border border-gray-800">
            <svg
              viewBox="0 0 800 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* Simplified UI wireframe */}
              <rect x="40" y="40" width="720" height="60" rx="8" fill="rgba(255,255,255,0.1)" />
              <rect x="60" y="55" width="120" height="30" rx="4" fill="rgba(255,255,255,0.2)" />
              <rect x="40" y="120" width="300" height="340" rx="8" fill="rgba(255,255,255,0.1)" />
              <rect x="360" y="120" width="400" height="340" rx="8" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-[10%] bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
export default ProductShowcase;