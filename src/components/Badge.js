import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la Conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/af9c8952c70a90472c70fb1860cea678?d=identicon"
            alt="Avatar"
          />
          <h1>
            Cristian <br /> Iñiguez
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Industrial Engineer</h3>
          <div>@cristianiniguez</div>
        </div>
        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
