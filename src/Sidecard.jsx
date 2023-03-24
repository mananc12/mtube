import React from "react";
import { Link } from "react-router-dom";

function Sidecard(props) {
  return (
    <Link className="link" style={props.style}>
      {props.icon}
      {props.data && <p>{props.text}</p>}
    </Link>
  );
}
export default Sidecard;
