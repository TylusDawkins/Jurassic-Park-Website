import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// routes

const DinoDeets = (props) => {
  let { id } = useParams();

  const [selectedDino, setDino] = useState("");

  useEffect(() => {
    let selectedDino = props.dinos.find((dino) => dino.id === parseInt(id));
    setDino(selectedDino);
  }, [props.dinos, id]);

  return selectedDino ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedDino.img} alt={selectedDino.name} />
        <div
          style={{
            minWidth: "30em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{selectedDino.name}</h1>
        </div>
      </div>
      <div className="info-wrapper">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Details {selectedDino.details}</h3>
          <h3>whateverelse {selectedDino.whateverelse}</h3>
        </div>
        <p>{selectedDino.description}</p>
      </div>
    </div>
  ) : null;
};

export default DinoDeets;
