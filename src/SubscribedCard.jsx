import React from "react";
import { Link } from "react-router-dom";
function SubscribedCard(props) {
  return (
    <Link
      to={props.to}
      className="subs"
      style={{ textDecoration: "none", color: "black" }}
    >
      {props.data && props.icon}
      {props.data === true ? <p>{props.p}</p> : null}
    </Link>
  );
}
export default SubscribedCard;
