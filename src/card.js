import React from "react";
import puce from "./aa.png";//import l'image fi  had thatiha
import Number from "./NumberTheCard";
import MesterCard from "./ccards.png";//import l'image direct min gir hata dossier (direct)

function Card1() {
  return (
    <div className="width-the-card">
      <h1 className="style-the-Name"> CREDIT CARD </h1>
      <img src={puce} className="style-the-image"></img>
      <div className="mestercard">
      <img src={MesterCard}  ></img>
      </div>
      <Number />
    </div>
  );
}

export default Card1;
