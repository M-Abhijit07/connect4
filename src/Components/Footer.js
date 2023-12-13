import React from "react";
import "../Game.css";

const Footer = ({onClickEvent}) => {
    return (
        <div className="panel footer">
            <button onClick={onClickEvent}>New Game</button>
        </div>
    )
}

export default Footer;