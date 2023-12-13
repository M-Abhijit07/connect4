import React from "react";
import "../Game.css";

const onClick = (ev, id) => {
  return alert("GameCircle clicked - " + id);
};

const GameCircle = ({ id, children }) => {

  return (
    <div
      className= {'gameCircle ${id % 2 === 0 ? "odd" : "even"}'}
      onClick={(ev) => onClick(ev, id)}
    ></div>
  );
};

export default GameCircle;
