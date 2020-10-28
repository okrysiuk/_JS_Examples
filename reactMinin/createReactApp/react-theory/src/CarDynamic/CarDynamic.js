import React from "react";

const CarDynamic = (props) => {
  return (
    <div>
      <h3>Car name: {props.name}</h3>
      <p>
        Year: <strong>{props.year}</strong>
      </p>
      {props.children}
    </div>
  );
};

export default CarDynamic;
