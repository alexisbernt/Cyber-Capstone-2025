import { motion } from "framer-motion";

export default function GridPattern() {
  return (
    <svg
      className="absolute inset-0 -z-10"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M0 1h32M0 9h32M0 17h32M0 25h32"
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