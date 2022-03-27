import React from "react";
import "./Attractions.css";
import { useNavigate } from "react-router-dom";

const Attractions = (props) => {
  const navigate = useNavigate();

  return (
    <div id="atmain">
      <div id="card1" className="card" onClick={() => navigate("/dinosaurs")}>
        <img
          src="https://controlroom.jurassicoutpost.com/app/uploads/2016/05/tlw4.jpg"
          alt="A woman touches a baby Dinosaur"
          className="attractionimg"
        />
        <p>Meet Real Life Dinos!</p>
      </div>
      <div id="card2" className="card" onClick={() => navigate("/restaurants")}>
        <img
          src="https://controlroom.jurassicoutpost.com/app/uploads/2016/05/jw3.jpg"
          alt="Masosaurus eats a shark"
          className="attractionimg"
        />
        <p>World Class Attractions!</p>
      </div>
      <div id="card3" className="card" onClick={() => navigate("/rides")}>
        <p>Exciting Adventures!</p>
        <img src="" alt="Rides" className="ridesimg" />
      </div>
    </div>
  );
};

export default Attractions;
