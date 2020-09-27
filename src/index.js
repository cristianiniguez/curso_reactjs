import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    firstName="Cristian"
    lastName="Iñiguez"
    avatarUrl="https://www.gravatar.com/avatar/af9c8952c70a90472c70fb1860cea678?d=identicon"
    jobTitle="Industrial Engineer"
    twitter="criniguez"
  />,
  container
);
