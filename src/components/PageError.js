import React from "react";

import "./styles/PageError.css";

function PageError(props) {
  return (
    <div className="PageError">
      <span role="img" aria-label="X">
        ❌
      </span>
      {props.error.message}
      <span role="img" aria-label="O.O">
        😱
      </span>
    </div>
  );
}

export default PageError;
