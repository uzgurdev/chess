interface BoardProps {
  figure: string;
  isBlack: boolean;
  isSelected: boolean;
}

const line: BoardProps[] = [
  {
    figure: "pawn",
    isBlack: false,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: true,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: false,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: true,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: false,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: true,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: false,
    isSelected: false,
  },
  {
    figure: "pawn",
    isBlack: true,
    isSelected: false,
  },
];

const Board: BoardProps[][] = [
  [
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
  ],
  [
    {
      figure: "rook",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
  ],
  [
    {
      figure: "bishop",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
  ],
  [
    {
      figure: "rook",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
  ],
  [
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
  ],
  [
    {
      figure: "rook",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
  ],
  [
    {
      figure: "bishop",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
  ],
  [
    {
      figure: "rook",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: true,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: true,
      isSelected: false,
    },
    {
      figure: "pawn",
      isBlack: false,
      isSelected: false,
    },
  ],
];

console.log("board: ", Board);

export default Board;
