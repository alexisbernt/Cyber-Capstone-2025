import { Link } from "react-router-dom";
import "../css-sections/Roadmap.css";

export default function Roadmap() {
  return (
    <div className="roadmap-container">
      <div className="roadmap-header">
        <h1>Your Learning Roadmap</h1>
        <p>Follow these steps to complete your journey!</p>
      </div>

      <div className="roadmap-track">
        {steps.map((step, index) => (
          <div key={index} className="roadmap-step-wrapper">
            <div className="roadmap-marker">
              <div className="circle"></div>
              {index < steps.length - 1 && <div className="line"></div>}
            </div>
            <Link to={step.path} className="roadmap-step">
              <h2>{step.title}</h2>
              <div className="step-description">{step.description}</div>
            </Link>
          </div>
        ))}
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
