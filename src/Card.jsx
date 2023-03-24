import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Card() {
  return (
    <Router>
      <div className="vid-list">
        <Link rel="stylesheet" href="">
          <img
            src="https://source.unsplash.com/random/900×700/?fruit"
            alt="thumbnail"
            className="thumbnail"
          />
        </Link>
        <div className="flexDiv">
          <AccountCircleIcon className="icon" />
          <div className="vidInfo">
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Link>
            <p style={{ marginBottom: "3px" }}>Channel</p>
            <p style={{ marginTop: "3px" }}>Views &bull; Days</p>
            {/*The symbol "•" is called a bullet point or bullet symbol. 
                 It is often used in lists to separate items and make them easier to read. */}
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Card;
