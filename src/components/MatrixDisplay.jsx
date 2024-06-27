import React from "react";

const MatrixDisplay = ({ text }) => {
  const matrixRegex = /\[\[(.*?)\]\]/g;
  const parts = text.split(matrixRegex);

  return (
    <span className="flex flex-row items-center">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? part : <MatrixDisplayContent text={part} />}
        </React.Fragment>
      ))}
    </span>
  );
};

const MatrixDisplayContent = ({ text }) => {
  const rows = text.replace(/^\s+|\s+$/g, "").split("],[");

  return (
    <div className="matrix mx-3 border border-gray-400 p-1">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.split(",").map((value, colIndex) => (
            <div
              key={colIndex}
              className="matrix-cell p-1 border border-gray-300"
            >
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixDisplay;
