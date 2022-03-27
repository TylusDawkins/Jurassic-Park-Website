import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Rides = () => {
    const [rides,setRides] = useState({})
  
    const getRides = async() => {
      const rideList = await axios.get('https://jurassic-master.herokuapp.com/api/rides')
      console.log(rideList.data.rides)
      setRides(rideList.data.rides)
      console.log(rides)
    }
    useEffect(() =>{
      getRides()
    },[])
    return (
        <div> 
            test
            {Rides.map((ride) => (
        <div>
          <h3>{ride.name}</h3>
          <h1>{ride.description}</h1>
        </div>
      ))}
        </div>
        )
}

export default Rides;
