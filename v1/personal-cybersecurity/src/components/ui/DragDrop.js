import { useState, useEffect } from "react";

const wordPairs = {
    CYBERSECURITY: "The practice of protecting digital systems and data from cyber threats.",
    CYBERATTACK: "When data, networks, and/or computer systems are accessed (or under the threat to be accessed) in a unauthorized manner.",
    MALWARE : " A software (program made to operate on a device) made by cybercriminals with an intention to steal or manipulate technical information.",
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
      .sort(() => Math.random() - 0.5); // Shuffle words randomly

    setWords(shuffledWords);
    setMatchedWords([]);
    setScore(0);
  };

  const handleDrop = (e, targetWord) => {
    e.preventDefault();
    const draggedWord = e.dataTransfer.getData("word");

    if (wordPairs[draggedWord] === targetWord || wordPairs[targetWord] === draggedWord) {
      setMatchedWords([...matchedWords, draggedWord, targetWord]);
      setScore(score + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-4">Matching Game</h1>
      <p className="mb-4 text-lg">Drag and match the words correctly!</p>
      <p className="text-lg font-semibold mb-4">Score: {score}</p>

      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
        {words.map(({ word, pair }) =>
          !matchedWords.includes(word) ? (
            <div
              key={word}
              className="p-4 bg-blue-500 text-white text-lg font-bold rounded-lg cursor-pointer text-center"
              draggable
              onDragStart={(e) => e.dataTransfer.setData("word", word)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, word)}
            >
              {word}
            </div>
          ) : null
        )}
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
