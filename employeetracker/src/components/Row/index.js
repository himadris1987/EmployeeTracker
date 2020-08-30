import React from "react";
import "./style.css";

function Row(props) {
  return <div id="rows" className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;