import { ReactNode, useEffect, useState } from "react";
import Board from "../board";
import Cell from "./cell";

export default function BoardElm() {
  const [board, setBoard] = useState(Board);

  function setSelected(x: number, y: number) {
    const newBoard = Board.map((row) => {
      return row.map((cell) => Object.assign({}, cell));
    });

    newBoard.forEach((row, xIndex) => {
      row.forEach((cell, yIndex) => {
        if (xIndex === x && yIndex === y && cell.isSelected === false) {
          cell.isSelected = true;
        } else {
          cell.isSelected = false;
        }
      });
    });

    setBoard(newBoard);

    console.log("newBoard", newBoard);
    console.log("Board", Board);
  }

  function handleFigure(x: number, y: number, figure: string) {
    const newBoard = Board.map((row) =>
      row.map((cell) => Object.assign({}, cell))
    );

    if (figure === "rook") {
      newBoard.forEach((row) => {
        row.forEach((cell) => {
          cell.figure = cell.figure === "rook" ? "" : cell.figure;
        });
      });
    }

    newBoard[x][y].figure = figure;
    newBoard[x][y].isSelected = false;

    setBoard(newBoard);
    console.log("new board: ", newBoard);
  }

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <Cell
              key={j}
              x={i}
              y={j}
              isBlack={cell.isBlack}
              handleFigure={handleFigure}
              isSelected={cell.isSelected}
              children={cell.figure}
              handleSelected={() => setSelected(i, j)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
