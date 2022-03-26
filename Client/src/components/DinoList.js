import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
//routes

const DinoList = (props) => {
  let navigate = useNavigate();
  const showDino = (dino) => {
    navigate(`${dino._id}`);
  };
  const [dinos,setDinos] = useState()
  
  const getDinos = async() => {
    const dinoList = await axios.get('https://jurassic-master.herokuapp.com/api/dinos')
    setDinos(dinoList.data.dinos)
  }
  useEffect(() =>{
    getDinos()
  },[])
console.log(dinos)

  return (
    <div className="dino-grid">
      {props.dinos.map((dino) => (
        <div className="dino-card" onClick={() => showDino(dino)} key={dino._id}>
          <img style={{ display: "block" }} src={dino.image} alt={dino.name} />
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