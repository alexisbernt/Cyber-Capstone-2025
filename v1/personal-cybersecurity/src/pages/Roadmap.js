import { Link } from "react-router-dom";

export default function Roadmap() {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">Your Learning Roadmap</h1>
      <p className="text-lg mb-8">Follow these steps to complete your journey!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {steps.map((step, index) => (
          <Link key={index} to={step.path}>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300 cursor-pointer flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
              <button className="w-24 h-24 bg-blue-500 text-white text-sm rounded-full flex items-center justify-center hover:bg-blue-400 transition duration-300">
                {step.description}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const steps = [
  { title: "Step 1: First Stop", path: "/module1", description: "Begin" },
  { title: "Step 2: Second Stop", path: "/module2", description: "Build" },
  { title: "Step 3: Third Stop", path: "/module3", description: "Dive" },
  { title: "Step 4: Fourth Stop", path: "/module4", description: "Expand" },
  { title: "Step 5: Fifth Stop", path: "/module5", description: "Refine" },
  { title: "Step 6: Sixth Stop", path: "/module6", description: "Apply" },
  { title: "Step 7: Final Stop", path: "/module7", description: "Complete" },
];
