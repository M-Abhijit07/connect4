import React from "react";
import "../Game.css";

const Footer = ({onNewGameClick, onSuggestClick}) => {
    return (
        <div className="panel footer">
            <button onClick={onNewGameClick}>New Game</button>
            <button onClick={onSuggestClick}>Suggest</button>
        </div>
    )
}

export default Footer;