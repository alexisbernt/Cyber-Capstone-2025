import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  // { content: "Click the Button for Learn Cybersecurity Video #1", image: "/lesson1-img.png" },
  { content: <br/> , video: "https://www.youtube.com/embed/nYbB-uTSsTw?si=Diu1Ml2daN1dPBac" } // Embed video using the '/embed' then the YouTube ID 
];

export default function Booklet2() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  const prevPage = () => setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
      <div className="relative w-full max-w-5xl aspect-video bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-center mx-auto">
        <button
          onClick={prevPage}
          className="absolute left-4 bg-gray-800 text-white px-3 py-2 rounded-full text-lg hover:bg-gray-600"
        >
          ◀
        </button>

        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
          >
            {pages[currentPage].video ? (
              <iframe
              className="absolute inset-0 w-full h-full"
              src={pages[currentPage].video}
              title="Embedded Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            ) : (
              <img src={pages[currentPage].image} alt={pages[currentPage].content} className="w-full h-3/4 object-cover" />
            )}
            <span className="bg-white bg-opacity-70 px-4 py-2 rounded-lg shadow-md mt-4 text-3xl font-bold text-gray-700">
              {pages[currentPage].content}
            </span>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextPage}
          className="absolute right-4 bg-gray-800 text-white px-3 py-2 rounded-full text-lg hover:bg-gray-600"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
