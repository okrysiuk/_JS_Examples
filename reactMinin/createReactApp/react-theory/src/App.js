import "./App.css";
import React from "react";
import Car from "./Car/Car.js";
import CarDynamic from "./CarDynamic/CarDynamic.js";

function App() {
  const divStyle = {
    color: "#252726",
  };
  const divCar = {
    display: "inline-block",
    border: "1px solid grey",
    padding: "10px",
    margin: "20px",
  };
  return (
    <div className="App" style={divStyle}>
      <h1 style={{ "text-transform": "uppercase" }}>Hello wold</h1>
      <Car />
      <Car />
      <div style={divCar}>
        <CarDynamic name={"Ford"} year={"2018"} />
      </div>
      <div style={divCar}>
        <CarDynamic name={"Audi"} year={"2019"}>
          <p style={{ textTransform: "uppercase", color: "red" }}>color</p>
        </CarDynamic>
      </div>
      <div style={divCar}>
        <CarDynamic name={"Mazda"} year={"2010"} />
      </div>
    </div>

    // Same code explains React elements

    /*React.createElement(
      "div",
      {
        className: "App",
      },
      React.createElement("h1", null, "Hello world!")
    )*/
  );
}

export default App;
