import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState({});

  const getRestaurants = async () => {
    const restaurantsList = await axios.get(
      "https://jurassic-master.herokuapp.com/api/restaurants"
    );
    setRestaurants(restaurantsList);
    //   console.log(restaurantList.data.restaurants)
    console.log(restaurants);
  };
  useEffect(() => {
    getRestaurants();
    console.log(restaurants);
  }, []);

  if (restaurants.data) {
    return (
      <div>
        test
        {restaurants.data.restaurants.map((restaurant) => (
          <div>
            <img
              style={{ display: "block" }}
              src={restaurant.image}
              alt={restaurant.name}
            />
            <h3>{restaurant.name}</h3>
            <h1>{restaurant.description}</h1>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Restaurants;
