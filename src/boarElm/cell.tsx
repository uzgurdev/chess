import { useState } from "react";
import { Bishop, Pawn, Rook, Trash } from "../figures";

interface CellProps {
  isBlack: boolean;
  isSelected: boolean;
  children: React.ReactNode;
  handleSelected: () => void;
}
export default function Cell({
  isBlack,
  isSelected,
  children,
  handleSelected,
}: CellProps) {
  function handleChildren() {
    if (children === "pawn") return <Pawn />;
    if (children === "rook") return <Rook />;
    if (children === "bishop") return <Bishop />;
    if (children === "trash") return <Trash />;
  }
  return (
    <div className={isBlack ? "cell black" : "cell"} onClick={handleSelected}>
      {handleChildren()}
      {isSelected && (
        <div className="selected">
          <Pawn />
          <Rook />
          <Bishop />
          <Trash />
        </div>
      )}
    </div>
  );
}
