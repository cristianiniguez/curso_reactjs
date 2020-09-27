import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
// );
// const name = "Dario";
// const sum = () => 3 + 3;
// const jsx = <h1>Hola soy {null}</h1>;
// const element = React.createElement("h1", {}, `Hola soy ${name}`);

const jsx = (
  <div>
    <h1>Hola, soy Cristian</h1>
    <p>Soy Ingeniero Industrial</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Cristian"),
  React.createElement("p", {}, "Soy Ingeniero Industrial")
);
const container = document.getElementById("app");

// ReactDOM.render(__que__, __donde__)
ReactDOM.render(element, container);
