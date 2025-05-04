import { motion } from "framer-motion";
import { useState } from "react";
import { Settings2, LineChart, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Discover",
    description: "Understand what cybersecurity is and how to use it in your personal life"
  },
  {
    icon: LineChart,
    title: "Conceal",
    description: "Hide your personal information and learn the tools to get deep insights with real-time data visualization"
  },
  {
    icon: Users,
    title: "Enforce",
    description: "Work seamlessly online with the tools that enforce your protection"
  },
  {
    icon: Shield,
    title: "Lengthen",
    description: "Get the highest-grade security to protect your sensitive data"
  }
];

export default function Features() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const itemsPerPage = 2;
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
    <section style={{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Verdana, sans-serif',
      padding: '60px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '20px' }}>
          How to Implement Cybersecurity:
        </h2>
        <p style={{
          fontSize: '20px',
          color: '#ccc',
          marginBottom: '40px'
        }}>
          Discover, Conceal, Enforce, and Lengthen
        </p>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {visibleFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: '#1e1e1e',
                  padding: '30px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                }}
              >
                <Icon style={{ width: '50px', height: '50px', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#ccc' }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <button
            onClick={prevScreen}
            disabled={currentScreen === 0}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: currentScreen === 0 ? 'not-allowed' : 'pointer',
              opacity: currentScreen === 0 ? 0.5 : 1,
              transition: 'background-color 0.3s'
            }}
          >
            Prior Page
          </button>

          <button
            onClick={nextScreen}
            disabled={currentScreen === totalScreens - 1}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: currentScreen === totalScreens - 1 ? 'not-allowed' : 'pointer',
              opacity: currentScreen === totalScreens - 1 ? 0.5 : 1,
              transition: 'background-color 0.3s'
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </section>
  );
}
