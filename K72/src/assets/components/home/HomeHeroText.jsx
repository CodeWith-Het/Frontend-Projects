import React from "react";
import Video from "./Video";
import WorldIcon from './worldicon.png';

const HomeHeroText = () => {
  return (
    <div className="font-[font2] pt-1.5">
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw] gap-2">
        qui
        <div className="h-[8vw] w-[8vw]">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]">
        la créativité
      </div>
      <div className=" absolute right-5 w-1/4 p-4 items-end justify-between ">
          K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait
      </div>
      <div>
        <img src={WorldIcon} className="bottom-3 absolute left-2" />
      </div>
    </div>
  );
};

export default HomeHeroText;
