import { useEffect } from "react";
import Board from "../board";
import Cell from "./cell";

export default function BoardElm() {
  return (
    <div className="board">
      {Board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <Cell
              key={j}
              isBlack={cell.isBlack}
              isSelected={cell.isSelected}
              children={cell.figure}
              handleSelected={() => {
                for (let k = 0; k < row.length; k++) {
                  row[k].isSelected = false;
                }
                row[j].isSelected = true;
                console.log("row", row);
                console.log("cell", cell);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
