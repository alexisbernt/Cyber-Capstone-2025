import { motion } from "framer-motion";

function PhotoPattern() {
  return (
    <div 
      className="absolute inset-0 w-full h-full -z-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/photos-bckgrnd.png')", backgroundPosition: "-180px -180px" }} // Moves image up and left
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Vertical lines */}
            <path
              d="M 60 0 L 60 60"
              strokeWidth="0.6"
              stroke="rgba(255,255,255,0.08)" 
              fill="none"
            />
            {/* Horizontal lines */}
            <path
              d="M 0 60 L 60 60"
              strokeWidth="0.6"
              stroke="rgba(255,255,255,0.08)"
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
    </div>
  );
}

export default PhotoPattern;
