import { motion } from "framer-motion";
import Button from "../../ui/Button";
import GridPattern from "../../patterns"; 

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black font-verdana">
      <GridPattern />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-3 mb-6 text-lg font-semibold bg-gray-800 text-gray-200 rounded-full tracking-wide"
          >
            LEARN PERSONAL CYBERSECURITY 
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-snug tracking-wide"
          >
            YOUR GUIDE TO YOUR CYBERSECURITY
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed tracking-wide"
          >
            Cybersecurity is important for businesses and electronic devices, but how does cyber security play a role in our personal lives? 
            That's what the website is all about. This site is helping us improve our personal cybersecurity skills and protecting us from potential threats online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
         <Button 
          size="lg" 
          className="bg-[#9cc0cf] text-white hover:bg-[#374151] px-[160px] py-[80px] text-2xl tracking-wide border-none rounded-none transition-colors duration-300"
        >
          Start Learning
        </Button>

        <Button 
          size="lg" 
          variant="outline" 
          className="bg-[#9cc0cf] text-white hover:bg-[#374151] px-[160px] py-[80px] text-2xl tracking-wide border-none rounded-none transition-colors duration-300"
        >
          Sign up
        </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
