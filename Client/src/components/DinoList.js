import React from "react";
import { useNavigate } from "react-router-dom";
//routes

const DinoList = (props) => {
  let navigate = useNavigate();
  const showDino = (dino) => {
    navigate(`${dino._id}`);
  };
  return (
    <div className="dino-grid">
      hello there
      {props.dinos.map((dino) => (
        <div className="dino-card" onClick={() => showDino(dino)} key={dino._id}>
          <img style={{ display: "block" }} src={dino.img} alt={dino.name} />
          <h3>{dino.name}</h3>
        </div>
      ))}
    </div>
  );
};
export default DinoList;

// {props.dinos.map((dino) => (
//   <div className="dino-card" onClick={() => showDino(dino)} key={dino._id}>
//     <img style={{ display: "block" }} src={dino.img} alt={dino.name} />
//     <h3>{dino.name}</h3>
//   </div>
// ))}