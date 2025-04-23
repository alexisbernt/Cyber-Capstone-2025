import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "How many characters (letters, numbers, special characters, etc.) long should your passwords have at LEAST?",
    options: {
      A: "21",
      B: "12", // correct
      C: "10",
      D: "4",
    },
    correct: "B",
  },
  {
    question: "Where should you keep your passwords for safe storage?",
    options: {
      A: "In the notes app on my phone",
      B: "In a journal in a drawer",
      C: "In a recommended and researched password manager", // correct
      D: "In my downloads floder",
    },
    correct: "C",
  },
  {
    question: "What could happen if you leave your computer open when you leave a room?",
    options: {
      A: "Someone could connect malware to my computer", // correct
      B: "Someone could steal all my email exchanges",
      C: "Someone will automatically know my password to get in to the computer",
      D: "Even if the computer is opened, nothing happens if the computer screen is black",
    },
    correct: "A",
  },
];

export default function MultipleChoiceGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionKey) => {
    if (selectedAnswer) return; // prevent multiple selections
    setSelectedAnswer(optionKey);

    if (optionKey === currentQuestion.correct) {
      setScore((prev) => prev + 1);
      setShowCelebration(true);

      setTimeout(() => {
        setShowCelebration(false);
        nextQuestion();
      }, 1000);
    } else {
      setTimeout(() => nextQuestion(), 1000);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      alert(`Game Over! Your final score is ${score + 1+ (selectedAnswer === currentQuestion.correct ? 1 : 0)} / ${questions.length}`);
      resetGame();
    }
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowCelebration(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Multiple Choice Game</h1>
      <p className="text-lg font-medium mb-2">Score: {score}</p>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {currentQuestion.question}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedAnswer
                  ? key === currentQuestion.correct
                    ? "bg-green-500 text-white"
                    : key === selectedAnswer
                    ? "bg-red-500 text-white"
                    : "bg-gray-300"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {key}: {value}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {showCelebration && (
            <motion.div
              key="party"
              initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
              animate={{ opacity: 1, scale: 1.2, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-5xl mt-6"
            >
              🎉
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <button
        onClick={resetGame}
        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600"
      >
        Restart Game
      </button>
    </div>
  );
}
