import React, {useState} from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw } from "../helper";
import { NO_CIRCLE, NO_PLAYER, PLAYER_1, PLAYER_2, GAME_STATE_PLAYING, GAME_STATE_WON, GAME_STATE_DRAW } from "../Constants";
import "../Game.css";

const GameBoard = () => {

  const [gameBoard, setGameBoard] = useState(Array(25).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState();

  const initBoard = () => {
    const circles = [];
    for(let i=0; i< NO_CIRCLE; i++) {
      circles.push(renderCircle(i));
  }
  return circles;
}

  const circleClick = (id) => {
    console.log("Circle clicked " + id);

    if(gameBoard[id] !== NO_PLAYER) return;
    if(gameState !== GAME_STATE_PLAYING) return;

    if(isWinner(gameBoard, id, currentPlayer)){
      setGameState(GAME_STATE_WON);
      setWinPlayer(currentPlayer);
      console.log("Winner");
    }

    if(isDraw(gameBoard, id, currentPlayer)){
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
      console.log("Draw");
    }

    setGameBoard(prev => {
      return prev.map((circle, pos) => {
        if(pos === id ) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
  }

  const renderCircle = id => {
    return <GameCircle key={id} id={id} className={'player'+gameBoard[id]} onCircleClick={circleClick} />
  }

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer={winPlayer} />
      <div className="gameBoard">
        {initBoard()}
      </div>
      <Footer />
    </>

  );
};

export default GameBoard;
