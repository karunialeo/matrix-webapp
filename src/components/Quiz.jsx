import React, { useState } from "react";
import Question from "./Question";
import questions from "../data/questions";
import MatrixDisplay from "./MatrixDisplay";
import matrixImage from "../assets/matrix.png"; // Import the image

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { question: questions[currentQuestion], answer }]);

    if (answer.correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true);
    }
  };

  const refreshQuestion = () => {
    setCompleted(false);
    setScore(0);
    setCurrentQuestion(0);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-transparent-gray flex flex-col items-center justify-center p-6 relative">
      <img
        src={matrixImage}
        alt="Background Image"
        className="absolute inset-0 object-cover filter opacity-20 self-center place-self-center -z-10"
      />
      {completed ? (
        <div className="bg-transparent-white p-8 rounded-lg shadow-lg text-center w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Kuis Selesai! Nilai anda: {(score / questions.length) * 100}
          </h2>
          {(score / questions.length) * 100 === 100 ? (
            <p className="font-semibold mb-5 tracking-wider text-lg">
              Anda jenius! 👏👏👏
            </p>
          ) : (
            <button
              type="button"
              onClick={refreshQuestion}
              className="mb-5 group"
            >
              <span className="font-semibold tracking-wide text-lg text-blue-600 group-hover:tracking-widest group-hover:text-blue-400 duration-500">
                {"--> Ayo coba lagi ! <--"}
              </span>
            </button>
          )}
          <div className="space-y-6">
            {answers.map((result, index) => (
              <div
                key={index}
                className="bg-transparent-white p-4 rounded-lg shadow-md"
              >
                <h2 className="text-xl text-left mb-4">
                  Soal No. {index + 1}
                  {"\n"}
                  <MatrixDisplay text={result.question.question} />
                </h2>
                <div className="flex flex-col space-y-2">
                  {result.question.options.map((option, idx) => (
                    <button
                      key={idx}
                      className={`p-2 rounded ${
                        option.text === result.answer.text
                          ? option.correct
                            ? "bg-green-300"
                            : "bg-red-300"
                          : option.correct
                          ? "bg-green-300"
                          : "bg-gray-300"
                      }`}
                      disabled
                    >
                      <MatrixDisplay text={option.text} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-transparent-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <Question
            key={currentQuestion} // This will force the Question component to remount
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            questionNumber={currentQuestion + 1}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
