import React, { useState } from "react";

const Calculator = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [error, setError] = useState("");
  const [matrix, setMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);

  const handleMatrixSizeChange = (size) => {
    setMatrixSize(size);
    if (size === 2) {
      setMatrix([
        [0, 0],
        [0, 0],
      ]);
    } else {
      setMatrix([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ]);
    }
  };

  const handleInputChange = (i, j, value) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setError("");
      const newMatrix = matrix.map((row, rowIndex) =>
        row.map((col, colIndex) =>
          rowIndex === i && colIndex === j ? parseFloat(value) : col
        )
      );
      setMatrix(newMatrix);
    } else {
      setError("Please enter only numbers and decimal point.");
    }
  };

  const calculateDeterminant = () => {
    if (matrixSize === 2) {
      return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else {
      return (
        matrix[0][0] *
          (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
        matrix[0][1] *
          (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
        matrix[0][2] *
          (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
      );
    }
  };

  const calculateInverse = () => {
    const det = calculateDeterminant();
    if (det === 0) {
      return null;
    }

    if (matrixSize === 2) {
      return [
        [matrix[1][1] / det, -matrix[0][1] / det],
        [-matrix[1][0] / det, matrix[0][0] / det],
      ];
    } else {
      const inv = [];
      for (let i = 0; i < 3; i++) {
        inv[i] = [];
        for (let j = 0; j < 3; j++) {
          inv[i][j] = (
            (matrix[(j + 1) % 3][(i + 1) % 3] *
              matrix[(j + 2) % 3][(i + 2) % 3] -
              matrix[(j + 1) % 3][(i + 2) % 3] *
                matrix[(j + 2) % 3][(i + 1) % 3]) /
            det
          ).toFixed(2);
        }
      }
      return inv;
    }
  };

  const inverse = calculateInverse();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-10 animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Kalkulator Matrix
      </h1>
      <div className="flex mb-6">
        <button
          className={`px-4 py-2 mx-2 bg-blue-500 text-white rounded transition-colors duration-300 ${
            matrixSize === 2 ? "bg-blue-700" : "hover:bg-blue-600"
          }`}
          onClick={() => handleMatrixSizeChange(2)}
        >
          Matrix 2x2
        </button>
        <button
          className={`px-4 py-2 mx-2 bg-blue-500 text-white rounded transition-colors duration-300 ${
            matrixSize === 3 ? "bg-blue-700" : "hover:bg-blue-600"
          }`}
          onClick={() => handleMatrixSizeChange(3)}
        >
          Matrix 3x3
        </button>
      </div>
      <div
        className={`grid ${
          matrixSize === 2 ? "grid-cols-2" : "grid-cols-3"
        } gap-4 mb-6`}
      >
        {matrix.map((row, i) =>
          row.map((value, j) => (
            <input
              key={`${i}-${j}`}
              type="number"
              value={value}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              className="p-2 border rounded bg-white"
            />
          ))
        )}
      </div>
      {error && <div className="text-red-500 mb-6">{error}</div>}
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Determinan: {calculateDeterminant()}
        </h2>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Inverse:</h2>
        {inverse ? (
          <div
            className={`grid ${
              matrixSize === 2 ? "grid-cols-2" : "grid-cols-3"
            } gap-4`}
          >
            {inverse.map((row, i) =>
              row.map((value, j) => (
                <div
                  key={`${i}-${j}`}
                  className="p-2 border rounded bg-white text-center"
                >
                  {value}
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="text-red-500">
            Matrix tidak memiliki invers (Determinan bernilai 0)
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
