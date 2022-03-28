import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// routes

const DinoDeets = (props) => {
  let { id } = useParams();
  let navigate = useNavigate();
 
  const [selectedDino, setDino] = useState({});

  useEffect(() => {
    const chosenDino = props.dinos.find((dino) => dino.id_number === id);
    setDino(chosenDino);
  }, []);

  return selectedDino ? (
    <div className="detail">
      <div className="detail-header">
        <img src={selectedDino.image} alt={selectedDino.name} />
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
          <h3> {selectedDino.whateverelse}</h3>
        </div>
        <p>{selectedDino.description}</p>
      </div>
      <div className="btn" onClick={() => navigate(-1)}>
          Back
        </div>
    </div>
  ) : null;
};

export default DinoDeets;
