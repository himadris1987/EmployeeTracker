import React from "react";

function Container(props) {
  return <div id ="containers" className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
