import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar(props) {
  const [data, setdata] = useState(false);

  function handleClick() {
    setdata((preValue) => !preValue);
    props.onButtonClick(data);
  }

  return (
    <nav className="flexDiv">
      {/* ----------------------Left navbar-------------------- */}
      <div className="navLeft">
        <MenuIcon className="icon" onClick={handleClick} />
        <img
          src="https://img.icons8.com/external-others-inmotus-design/67/null/external-M-alphabet-others-inmotus-design-20.png"
          alt="icon"
          style={{ cursor: "pointer" }}
        />
        <h1 style={{ cursor: "pointer" }}>Tube</h1>
      </div>

      {/* ----------------------middle navbar-------------------- */}
      <div className="navMiddle">
        <input type="text" placeholder="Search" />
        <SearchOutlinedIcon
          className="icon searchIcon"
          style={{ cursor: "pointer" }}
        />
        <MicIcon className="icon" style={{ cursor: "pointer" }} />
      </div>

      {/* ----------------------middle navbar-------------------- */}
      <div className="navRight">
        <VideocamOutlinedIcon className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <AccountCircleIcon className="icon userIcon" />
      </div>
    </nav>
  );
}
export default Navbar;
