import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SubscribedCard from "./SubscribedCard";
function Subscribed(props) {
  const SubscribedList = [
    { icon: <AccountCircleIcon />, to: "/", p: "Lorem ipsum" },
    { icon: <AccountCircleIcon />, to: "/", p: "Lorem ipsum" },
    { icon: <AccountCircleIcon />, to: "/", p: "Lorem ipsum" }
  ];
  const SubscribedList2 = SubscribedList.map((obj, index) => (
    <SubscribedCard data={props.data} to={obj.to} icon={obj.icon} p={obj.p} />
  ));
  return (
    <Router>
      <div className="Subscriptions">{SubscribedList2}</div>
    </Router>
  );
}
export default Subscribed;
