import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Settings2, LineChart, Users, Shield } from "lucide-react";

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gray-900/50 backdrop-blur-lg border-gray-800 hover:bg-gray-900/70 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
