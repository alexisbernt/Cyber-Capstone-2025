import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Settings2, LineChart, Users, Shield } from "lucide-react";
import Button from "../../ui/Button";
// import "/lock-bckgrnd.png";

const features = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "The practice of protecting digital systems and data from cyber threats. "
  },
  {
    icon: Settings2,
    title: "Cyberattack",
    description: "When data, networks, and/or computer systems are accessed (or under the threat to be accessed) in a unauthorized manner."
  },
  {
    icon: Users,
    title: "Digital Footprint",
    description: "The actions you take on a device/online."
  },
  {
    icon: LineChart,
    title: "Malware",
    description: "A software (program made to operate on a device) made by cybercriminals with an intention to steal or manipulate technical information."
  }
];

export default function Definitions() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const itemsPerPage = 2; // Number of items per screen
  const totalScreens = Math.ceil(features.length / itemsPerPage);

  const nextScreen = () => {
    if (currentScreen < totalScreens - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const visibleFeatures = features.slice(
    currentScreen * itemsPerPage,
    (currentScreen + 1) * itemsPerPage
  );

  return (
    <section className="py-24 bg-black text-center font-verdana">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-wide">
          Some Definitions:
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed tracking-wide mb-12">
          Cybersecurity, Cyberattack, Malware, Digital Footprint
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300 shadow-lg">
                  <Icon className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-12 flex justify-center space-x-8">
          <Button 
            onClick={prevScreen} 
            disabled={currentScreen === 0}
            className="px-[200px] py-[100px] text-3xl font-semibold tracking-wide bg-[#9cc0cf] text-white hover:bg-[#374151] border-none rounded-none transition-colors duration-300"
          >
            Prior Page
          </Button>
          <Button 
            onClick={nextScreen} 
            disabled={currentScreen === totalScreens - 1}
            className="px-[200px] py-[100px] text-3xl font-semibold tracking-wide bg-[#9cc0cf] text-white hover:bg-[#374151] border-none rounded-none transition-colors duration-300"
          >
            Next Page
          </Button>
        </div>
      </div>
    </section>
  );
}