import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimbab",
    picture : "",
    rating : 4.8
  },
  {
    id: 1,
    name: "meat",
    picture : "",
    rating : 4.5
  },
  {
    id: 1,
    name: "chicken",
    picture : "",
    rating : 5
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
      
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.string
};

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        (<Food 
          key={dish.id}
          name={dish.name}
          picture={dish.picture}
          rating={dish.rating}
        />))};
    </div>
  );
}

export default App;