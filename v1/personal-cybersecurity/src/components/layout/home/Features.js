import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Settings2, LineChart, Users, Shield } from "lucide-react";
import Button from "../../ui/Button";

const features = [
  {
    icon: Settings2,
    title: "Powerful Automation",
    description: "Streamline your workflow with intelligent automation tools"
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "Get deep insights with real-time data visualization"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security to protect your sensitive data"
  }
];

export default function Features() {
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
    <section className="py-24 bg-black text-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-center space-x-6">
          <Button 
            onClick={prevScreen} 
            disabled={currentScreen === 0}
            className="px-[160px] py-[80px] text-2xl font-semibold tracking-wide bg-[#9cc0cf] text-white hover:bg-[#374151] border-none rounded-none transition-colors duration-300 font-verdana"
          >
            Prior Page
          </Button>
          <Button 
            onClick={nextScreen} 
            disabled={currentScreen === totalScreens - 1}
            className="px-[160px] py-[80px] text-2xl font-semibold tracking-wide bg-[#9cc0cf] text-white hover:bg-[#374151] border-none rounded-none transition-colors duration-300 font-verdana"
          >
            Next Page
          </Button>
        </div>
      </div>
    </section>
  );
}
