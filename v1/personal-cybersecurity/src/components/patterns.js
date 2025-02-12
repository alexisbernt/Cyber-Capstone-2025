import { motion } from "framer-motion";

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="40"  // Increased to maintain spacing
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Vertical lines */}
          <path
            d="M 40 0 L 40 40"
            strokeWidth="0.5"
            stroke="rgba(255,255,255,0.1)"
            fill="none"
          />
          {/* Horizontal lines */}
          <path
            d="M 0 40 L 40 40"
            strokeWidth="0.5"
            stroke="rgba(255,255,255,0.1)"
            fill="none"
          />
        </pattern>
      </defs>
      <motion.rect
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width="100%"
        height="100%"
        fill="url(#grid)"
      />
    </svg>
  );
}
export default GridPattern;