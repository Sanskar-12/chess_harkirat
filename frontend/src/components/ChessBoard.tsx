import { Color, PieceSymbol, Square } from "chess.js";

interface ChessBoardProps {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
}

const ChessBoard = ({ board }: ChessBoardProps) => {
  return <div>ChessBoard</div>;
};

export default ChessBoard;
