import React from "react";
import { useSelector } from "react-redux";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants);

  console.log(restaurants)

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.name}>{restaurant.name}, in {restaurant.location}</li>
        ))}
      </ul>
    </div>
  );
}

export default Restaurants;
