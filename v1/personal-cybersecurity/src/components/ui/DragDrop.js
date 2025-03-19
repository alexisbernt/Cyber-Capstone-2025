import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordPairs = {
    CYBERSECURITY: "The practice of protecting digital systems and data from cyber threats.",
    CYBERATTACK: "When data, networks, and/or computer systems are accessed (or under the threat to be accessed) in an unauthorized manner.",
    MALWARE : "A software (program made to operate on a device) made by cybercriminals with an intention to steal or manipulate technical information.",
    DIGITAL_FOOTPRINT: "The actions you take on a device/online.",
};

export default function MatchingGame() {
  const [words, setWords] = useState([]);
  const [matchedWords, setMatchedWords] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const shuffledWords = Object.entries(wordPairs)
      .flatMap(([key, value]) => [
        { word: key, pair: value },
        { word: value, pair: key },
      ])
      .sort(() => Math.random() - 0.5);

    setWords(shuffledWords);
    setMatchedWords([]);
    setScore(0);
  };

  const handleDrop = (e, targetWord) => {
    e.preventDefault();
    const draggedWord = e.dataTransfer.getData("word");

    if (wordPairs[draggedWord] === targetWord || wordPairs[targetWord] === draggedWord) {
      setMatchedWords((prev) => [...prev, draggedWord, targetWord]);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4">Matching Game</h1>
      <p className="mb-4 text-lg">Drag and match the words correctly!</p>
      <p className="text-lg font-semibold mb-4">Score: {score}</p>

      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
        <AnimatePresence>
          {words.map(({ word }) =>
            !matchedWords.includes(word) ? (
              <motion.div
                key={word}
                className="p-4 bg-blue-500 text-white text-lg font-bold rounded-full cursor-pointer text-center flex items-center justify-center w-32 h-32"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("word", word)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, word)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0, rotate: 360 }}
              >
                {word}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={restartGame}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600"
      >
        Restart Game
      </button>
    </div>
  );
}
