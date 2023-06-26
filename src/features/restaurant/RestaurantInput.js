import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // add missing code
    dispatch(addRestaurant({name, location})); // passing in name, location. in restaurantsSlice, the payload (argument), is restaurant. you just need to pass the argument here
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          onChange={handleNameChange}
          id="name"
          placeholder="restaurant name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={handleLocationChange}
          id="location"
          placeholder="location"
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantInput;
