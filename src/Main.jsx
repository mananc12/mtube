import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <div
      className="container"
      style={{
        paddingLeft: props.data ? null : "7%"
      }}
    >
      <div className="banner">
        <img
          src="https://source.unsplash.com/random/900×700/?universe"
          alt="banner"
        />
      </div>
      <div className="list-containers">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Main;
