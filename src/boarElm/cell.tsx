import { Bishop, Pawn, Rook, Trash } from "../figures";

interface CellProps {
  x: number;
  y: number;
  isBlack: boolean;
  isSelected: boolean;
  children: "pawn" | "rook" | "bishop" | "trash" | string;
  handleSelected: () => void;
  handleFigure: (x: number, y: number, figure: string) => void;
}
export default function Cell({
  x,
  y,
  isBlack,
  children,
  isSelected,
  handleSelected,
  handleFigure,
}: CellProps) {

  function handleChildren() {
    if (children === "pawn") return <Pawn />;
    if (children === "rook") return <Rook />;
    if (children === "bishop") return <Bishop />;
    if (children === "trash") return <Trash />;
  }
  return (
    <div className={isBlack ? "cell black" : "cell"} onClick={handleSelected}>
      <div className="figure">{handleChildren()}</div>

      <div className={isSelected ? "select selected" : "select"}>
        <div onClick={() => handleFigure(x, y, 'pawn')}>
          <Pawn />
        </div>
        <div onClick={() => handleFigure(x, y, 'rook')}>
          <Rook />
        </div>
        <div onClick={() => handleFigure(x, y, 'bishop')}>
          <Bishop />
        </div>
        <div onClick={() => handleFigure(x, y, 'trash')}>
          <Trash />
        </div>
      </div>
    </div>
  );
}
