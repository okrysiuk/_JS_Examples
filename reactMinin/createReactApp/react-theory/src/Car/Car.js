import React from "react";
/*function Car() {
  return <h2>This is car component</h2>;
}

/*const Car = () => {
  return <h2>This is car component</h2>;
};*/

//const Car = () => <div>This is car component</div>;

function Car() {
  return (
    <div>
      <p>This is component</p>
      <p>
        Number:
        <strong>{Math.round(Math.random() * 100)}</strong>
      </p>
    </div>
  );
}

export default Car;
