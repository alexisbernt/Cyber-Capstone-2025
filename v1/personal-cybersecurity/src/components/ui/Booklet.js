import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { content: "Page 1", image: "/image2.png" },
  { content: "Page 2", image: null },
  { content: "Page 3", image: null },
];

export default function Booklet() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : 0));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : pages.length - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-5">
      <div className="relative w-96 h-64 bg-white shadow-lg rounded-lg overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center text-3xl font-bold text-gray-700"
            style={{ backgroundImage: "url('/book_background.jpg')" }}
          >
            {pages[currentPage].image && (
              <img src={pages[currentPage].image} alt="Page Visual" className="w-32 h-32 mb-2 rounded-lg shadow-md" />
            )}
            <span>{pages[currentPage].content}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-4 flex space-x-4">
        <button
          onClick={prevPage}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}