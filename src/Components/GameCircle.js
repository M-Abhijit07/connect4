import React from "react";
import "../Game.css";


const GameCircle = ({ id, onCircleClick, className }) => {

  return (
    <div className= {'gameCircle ' + className} onClick={() => onCircleClick(id)} >

    </div>
  );
};

export default GameCircle;
