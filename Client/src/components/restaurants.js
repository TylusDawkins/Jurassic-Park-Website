import React from "react"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Restaurants = () => {
    const [restaurants,setRestaurants] = useState({})
  
    const getRestaurants = async() => {
      const restaurantList = await axios.get('https://jurassic-master.herokuapp.com/api/restaurants')
      console.log(restaurantList.data.restaurants)
      setRestaurants(restaurantList.data.restaurants)
      console.log(restaurants)
    }
    useEffect(() =>{
      getRestaurants()
    },[])
    return (
        <div> 
            test
            {restaurants.map((restaurant) => (
        <div>
          <img style={{ display: "block" }} src={restaurant.image} alt={restaurant.name}/>
          <h3>{restaurant.name}</h3>
          <h1>{restaurant.description}</h1>
        </div>
      ))}
        </div>
        )
}

export default Restaurants;

