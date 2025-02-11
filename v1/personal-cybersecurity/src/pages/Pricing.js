import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import WavePattern from "@/components/ui/patterns/WavePattern";
import Header from "@/components/layout/Header";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 email support",
      "1GB storage"
    ]
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "Unlimited team members",
      "Advanced analytics & reporting",
      "24/7 phone support",
      "Unlimited storage",
      "Custom development",
      "Dedicated account manager"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <div className="relative pt-20">
        <WavePattern />
        
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
            <p className="text-gray-400 text-lg">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`p-6 backdrop-blur-lg border-gray-800 h-full flex flex-col
                    ${plan.highlighted 
                      ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700' 
                      : 'bg-gray-900/50'}`}
                >
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <div className="flex-grow">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={plan.highlighted ? "default" : "secondary"}
                    className={`w-full ${plan.highlighted ? 'bg-white text-black hover:bg-gray-100' : ''}`}
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}