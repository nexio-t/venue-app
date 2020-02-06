import React from "react";
import "./style.css";
import 'bulma/css/bulma.css'

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;
