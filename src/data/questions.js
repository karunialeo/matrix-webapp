const questions = [
  // Addition questions
  // 1
  {
    question: "Hitung hasil dari [[1,2],[3,4]] + [[1,1],[1,1]] !",
    options: [
      { text: "[[2,3],[4,5]]", correct: true },
      { text: "[[3,4],[5,6]]", correct: false },
      { text: "[[2,2],[3,3]]", correct: false },
      { text: "[[1,1],[2,2]]", correct: false },
    ],
  },
  // 2
  {
    question: "Hitung hasil dari [[2,3],[4,5]] + [[5,6],[7,8]] !",
    options: [
      { text: "[[6,8],[10,12]]", correct: false },
      { text: "[[8,9],[12,13]]", correct: false },
      { text: "[[7,9],[11,13]]", correct: true },
      { text: "[[7,8],[11,12]]", correct: false },
    ],
  },

  // Multiplication questions
  // 3
  {
    question: "Hitung hasil dari [[1,2],[3,4]] * [[1,0],[0,1]] !",
    options: [
      { text: "[[0,0],[0,0]]", correct: false },
      { text: "[[2,0],[0,4]]", correct: false },
      { text: "[[1,2],[3,4]]", correct: true },
      { text: "[[1,0],[0,4]]", correct: false },
    ],
  },
  // 4
  {
    question: "Hitung hasil dari [[1,2],[3,4]] * [[2,0],[1,2]] !",
    options: [
      { text: "[[3,4],[7,8]]", correct: false },
      { text: "[[4,4],[10,8]]", correct: true },
      { text: "[[2,2],[5,6]]", correct: false },
      { text: "[[5,4],[8,8]]", correct: false },
    ],
  },
  // 5
  {
    question: "Hitung hasil dari [[2,3],[4,5]] * [[1,1],[1,1]] !",
    options: [
      { text: "[[5,5],[9,9]]", correct: true },
      { text: "[[5,6],[9,10]]", correct: false },
      { text: "[[4,5],[8,9]]", correct: false },
      { text: "[[3,4],[7,8]]", correct: false },
    ],
  },

  // Determinant questions
  // 6
  {
    question: "Berapa nilai determinan dari [[1,2],[3,4]]?",
    options: [
      { text: "2", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "-2", correct: true },
    ],
  },
  // 7
  {
    question: "Berapa nilai determinan dari [[2,3],[1,4]]?",
    options: [
      { text: "-5", correct: false },
      { text: "6", correct: false },
      { text: "5", correct: true },
      { text: "0", correct: false },
    ],
  },
  // 8
  {
    question: "Berapa nilai determinan dari [[0,1],[1,0]]?",
    options: [
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: false },
      { text: "-1", correct: true },
    ],
  },

  // Inverse matrix questions
  // 9
  {
    question: "Temukan invers dari [[1,2],[3,4]] !",
    options: [
      { text: "[[2,-1],[-1.5,0.5]]", correct: false },
      { text: "[[-2,1],[1.5,-0.5]]", correct: true },
      { text: "[[1,-2],[-0.5,1.5]]", correct: false },
      { text: "[[-1,2],[0.5,-1.5]]", correct: false },
    ],
  },
  // 10
  {
    question: "Temukan invers dari [[2,1],[1,2]] !",
    options: [
      { text: "[[-2/3,1/3],[1/3,-2/3]]", correct: false },
      { text: "[[2/3,-1/3],[-1/3,2/3]]", correct: true },
      { text: "[[-1/3,2/3],[2/3,-1/3]]", correct: false },
      { text: "[[1/3,-2/3],[-2/3,1/3]]", correct: false },
    ],
  },
];

export default questions;
