import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";
import Calculator from "./pages/Calculator";

const router = createBrowserRouter([
  {
    path: "/matrix-app/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "matrix-app/quiz",
    element: (
      <>
        <Header />
        <QuizPage />
      </>
    ),
  },
  {
    path: "matrix-app/calculator",
    element: (
      <>
        <Header />
        <Calculator />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
