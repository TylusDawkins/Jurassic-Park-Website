import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'

const DinoList = () => {
  let navigate = useNavigate();
  const showDino = (dino) => {
    navigate(`${dino.id_number}`);
  };

  const [dinos,setDinos] = useState([])
  
  const getDinos = async() => {
    const dinoList = await axios.get('https://jurassic-master.herokuapp.com/api/dinos')
    setDinos(dinoList.data.dinos)
    console.log(dinos)
  }
  useEffect(() =>{
    getDinos()
  },[])


  return (
    <div className="dino-grid">
      {dinos.map((dino, i) => (
        <div className="dino-card" onClick={() => showDino(dino, i)} key={dino.i}>
          <img style={{ display: "block" }} src={dino.image} alt={dino.name} />
          <h3>{dino.name}</h3>
        </div>
      ))}
    </div>
  );
};
export default DinoList;
