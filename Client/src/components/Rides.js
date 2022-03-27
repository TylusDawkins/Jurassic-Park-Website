import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Rides = () => {
  const [rides, setRides] = useState({});

  const getRides = async () => {
    const rideList = await axios.get(
      "https://jurassic-master.herokuapp.com/api/rides"
    );
    console.log(rideList.data.rides);
    setRides(rideList.data.rides);
    console.log(rides);
  };
  useEffect(() => {
    getRides();
  }, []);
  if (rides[0]) {
    return (
      <div>
        {rides.map((ride) => (
          <div>
            <h3>{ride.name}</h3>
            <h1>{ride.description}</h1>
          </div>
        ))}
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Rides;
