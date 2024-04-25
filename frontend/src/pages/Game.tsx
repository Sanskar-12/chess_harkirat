/* eslint-disable no-case-declarations */
import { useEffect, useState } from "react";
import Button from "../components/Button";
import ChessBoard from "../components/ChessBoard";
import { useSocket } from "../hooks/useSocket";
import { Chess } from "chess.js";

export const INIT_TYPE = "init_game";
export const MOVE = "move";
export const GAME_OVER = "game_over";

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());

  const handleClick = () => {
    socket?.send(
      JSON.stringify({
        type: INIT_TYPE,
      })
    );
  };

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case INIT_TYPE:
          setChess(new Chess());
          setBoard(chess.board());
          console.log("Chess Game Intialised");
          break;

        case MOVE:
          const move = message.payload;
          chess.move(move);
          setBoard(chess.board());
          console.log("Move made");
          break;

        case GAME_OVER:
          console.log("Game Over");
          break;
      }
    };
  }, [socket, chess]);

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 bg-red-200 w-full">
            <ChessBoard board={board} />
          </div>
          <div className="col-span-2 bg-green-200 w-full">
            <Button onClick={handleClick}>Play</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
