import React from "react";
import {  Link, Route, Routes} from "react-router-dom";
import App from "../../App";
import Character from "./Character";

function CharacterLink(props) {
  return (
    <div className="CharacterLink" id="Character">
        <Link to="/">
        <button className="btn_back"  >GO BACK</button>
        </Link>
        <Character></Character>
    </div>
    
  );
}

export default CharacterLink;