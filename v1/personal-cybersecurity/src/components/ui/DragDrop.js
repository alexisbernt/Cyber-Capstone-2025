import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordPairs = {
  CYBERSECURITY: "The practice of protecting digital systems and data from cyber threats.",
  CYBERATTACK: "When data, networks, and/or computer systems are accessed (or under the threat to be accessed) in an unauthorized manner.",
  MALWARE: "A software (program made to operate on a device) made by cybercriminals with an intention to steal or manipulate technical information.",
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

    if (
      wordPairs[draggedWord] === targetWord ||
      wordPairs[targetWord] === draggedWord
    ) {
      setMatchedWords((prev) => [...prev, draggedWord, targetWord]);
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Matching Game</h1>
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Drag and match the words correctly!
      </p>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
        Score: {score}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          backgroundColor: "#1e1e1e",
          padding: "30px",
          borderRadius: "8px",
          maxWidth: "900px",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          marginBottom: "30px"
        }}
      >
        <AnimatePresence>
          {words.map(({ word }) =>
            !matchedWords.includes(word) ? (
              <motion.div
                key={word}
                draggable
                onDragStart={(e) => e.dataTransfer.setData("word", word)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, word)}
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "16px",
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  cursor: "grab",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                  userSelect: "none"
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                {word}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={restartGame}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#28a745",
          color: "white",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        Restart Game
      </button>
    </div>
  );
}
