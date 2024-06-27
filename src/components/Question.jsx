import React from "react";
import MatrixDisplay from "./MatrixDisplay";

const Question = ({ question, options, onAnswer, questionNumber }) => {
  return (
    <div className="mb-4 animate-fadeIn w-full max-w-3xl">
      <h2 className="text-lg mb-2">
        Soal No. {questionNumber}: <MatrixDisplay text={question} />
      </h2>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-gray-200 p-2 mb-2 md:mb-0 flex-1 text-center"
            onClick={() => onAnswer(option)}
          >
            <MatrixDisplay text={option.text} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
