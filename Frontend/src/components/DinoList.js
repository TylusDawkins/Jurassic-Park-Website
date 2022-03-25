import React from "react";
import { useNavigate } from "react-router-dom";
//routes

const DinoList = (props) => {
  let navigate = useNavigate();
  const showDino = (dino) => {
    navigate(`${dino.id}`);
  };

  return (
    <div className="dino-grid">
      {props.dinos.map((dino) => (
        <div className="dino-card" onClick={() => showDino(dino)} key={dino.id}>
          <img style={{ display: "block" }} src={dino.img} alt={dino.name} />
          <h3>{dino.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default DinoList;
