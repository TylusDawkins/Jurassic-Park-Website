import React from "react"
import './Attractions.css';
import { Link } from 'react-router-dom'

const Attractions = (props) => {

    return (
        <div id="atmain"> 
            <div id='card1' className="card" onClick={props.dinos}>
                {/* <Link to='/dinosaurs' >Dinosaurs</Link> */}
                <img src='https://controlroom.jurassicoutpost.com/app/uploads/2016/05/tlw4.jpg' alt="A woman touches a baby Dinosaur" className="attractionimg"/>
                <p>Meet Real Life Dinos!</p>
            </div>
            <div id="card2" className="card" onClick={props.details}>
            {/* <Link to='/restaurantsandrides' >Restaurants and Rides</Link> */}
                <p>World Class Attractions!</p>
                <img src="https://controlroom.jurassicoutpost.com/app/uploads/2016/05/jw3.jpg" alt="Masosaurus eats a shark" className="attractionimg"/>
            </div>
        </div>
        )
}

export default Attractions

