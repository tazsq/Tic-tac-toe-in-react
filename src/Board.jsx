import React, { useEffect } from "react";
import { useState } from "react";

// export function User() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return (
//     <div className="user">
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }
// export function MyButton({ count, onClick }) {
//   return <button onClick={onClick}>clicked {count} times</button>;
// }
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currChoice, setCurrChoice] = useState("X");
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is :" + winner;
  } else if (winner === null && squares.every((el) => el !== null)) {
    status = "Tie";
  } else {
    status = "Next Player: " + (currChoice === "X" ? "X" : "O");
  }
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = currChoice === "X" ? "X" : "O";
    setCurrChoice(currChoice === "X" ? "O" : "X");
    setSquares(nextSquares);
  }
  function reset() {
    setSquares(Array(9).fill(null));
    setCurrChoice("X");
    document.querySelector(".status").style.backgroundColor = "white";
  }
  useEffect(() => {
    console.log(squares);
  }, [squares]);

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      document.querySelector(".status").style.backgroundColor = "green";

      return squares[a];
    }
  }

  return null;
}
