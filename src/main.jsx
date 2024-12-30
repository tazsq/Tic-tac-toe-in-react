// import ShoppingList from "./App";
import Square from "./Board";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Board from "./Board";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Board />
  </StrictMode>
);
