import React from "react";

const MatrixDisplay = ({ text }) => {
  const matrixRegex = /\[\[(.*?)\]\]/g;
  const parts = text.split(matrixRegex);
  console.log(parts);

  return (
    <div>
      <p className="mb-4">{parts[0]}</p>
      {parts.length > 1 ? (
        <div className="mb-4 flex flex-row items-center gap-x-4">
          {parts.map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 ? (
                index % 2 === 0 ? (
                  part
                ) : (
                  <MatrixDisplayContent text={part} />
                )
              ) : null}
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const MatrixDisplayContent = ({ text }) => {
  const rows = text.replace(/^\s+|\s+$/g, "").split("],[");

  return (
    <div className="matrix mx-0 border border-gray-400 p-1">
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
