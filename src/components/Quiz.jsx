import React, { useState } from "react";
import Question from "./Question";
import questions from "../data/questions";
import MatrixDisplay from "./MatrixDisplay";

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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {completed ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Quiz Completed! Your score: {score}/{questions.length}
          </h2>
          <div className="space-y-6">
            {answers.map((result, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h2 className="text-xl mb-4">
                  Question {index + 1}:{" "}
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
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
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
