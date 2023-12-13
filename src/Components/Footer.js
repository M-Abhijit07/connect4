import React from "react";
import "../Game.css";

const Footer = ({onNewGameClick, onSuggestClick}) => {
    return (
        <div className="panel footer">
            <button class="newGame" onClick={onNewGameClick}>New Game</button>
            <button class="suggest" onClick={onSuggestClick}>Suggest</button>
        </div>
    )
}

export default Footer;