import { Link } from "react-router-dom";

export default function Roadmap() {
  return (
    <div className="login-page">
      <div className="login-page roadmap-page">
      <div className="login-card roadmap-card">
        <h1 className="login-title">Your Learning Roadmap</h1>
        <p className="login-subtitle">Follow these steps to complete your journey!</p>

        <div className="roadmap-grid">
          {steps.map((step, index) => (
            <Link key={index} to={step.path} className="roadmap-step">
              <h2 className="step-title">{step.title}</h2>
              <div className="login-button step-button">{step.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

const steps = [
  { title: "Step 1: What is 'Personal Cybersecurity' & Why Learn It?", path: "/module1", description: "Start" },
  { title: "Step 2: The Types of Cyberattacks That Get Personal", path: "/module2", description: "Continue" },
  { title: "Step 3: Third Stop", path: "/module3", description: "Dive" },
  { title: "Step 4: Fourth Stop", path: "/module4", description: "Expand" },
  { title: "Step 5: Fifth Stop", path: "/module5", description: "Refine" },
  { title: "Step 6: Sixth Stop", path: "/module6", description: "Apply" },
  { title: "Step 7: Final Stop", path: "/module7", description: "Complete" },
];
