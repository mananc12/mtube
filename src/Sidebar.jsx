// import React from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
// import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
// import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";
// import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
// import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
// import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
// import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Subscribed from "./Subscribed";
// import Sidecard from "./Sidecard"

// function Sidebar() {
//   return (
//     <div className="sideBar">
//       <Router>
//         <div className="shortcutLinks">
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <HomeOutlinedIcon />
//             <p>Home</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <Looks5OutlinedIcon />
//             <p>Shorts</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <SubscriptionsIcon />
//             <p>Subscriptions</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <VideoLibraryOutlinedIcon />
//             <p>Library</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <HistoryOutlinedIcon />
//             <p>History</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <SmartDisplayOutlinedIcon />
//             <p>Your Videos</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <WatchLaterOutlinedIcon />
//             <p>Watch Later</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <ContentCutOutlinedIcon />
//             <p>Your Clips</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <ThumbUpAltOutlinedIcon />
//             <p>Liked Videos</p>
//           </Link>
//           <Link
//             to="/"
//             className="link"
//             style={{ textDecoration: "none", color: "black" }}
//           >
//             <ExpandMoreIcon />
//             <p>Show more</p>
//           </Link>
//         </div>
//       </Router>
//       <h4>Subscriptions</h4>
//       <Subscribed />
//       <Subscribed />
//       <Subscribed />
//       <Subscribed />
//     </div>
//   );
// }
// export default Sidebar;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import Looks5OutlinedIcon from "@mui/icons-material/Looks5Outlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subscribed from "./Subscribed";
import Sidecard from "./Sidecard";

function Sidebar(props) {
  const shortcutLinks = [
    { icon: <HomeOutlinedIcon />, text: "Home" },
    { icon: <Looks5OutlinedIcon />, text: "Shorts" },
    { icon: <SubscriptionsIcon />, text: "Subscriptions" },
    { icon: <VideoLibraryOutlinedIcon />, text: "Library" },
    { icon: <HistoryOutlinedIcon />, text: "History" },
    { icon: <SmartDisplayOutlinedIcon />, text: "Your Videos" },
    { icon: <WatchLaterOutlinedIcon />, text: "Watch Later" },
    { icon: <ContentCutOutlinedIcon />, text: "Your Clips" },
    { icon: <ThumbUpAltOutlinedIcon />, text: "Liked Videos" },
    { icon: <ExpandMoreIcon />, text: "Show more" }
  ];

  const linkElements = shortcutLinks.map((link, index) => (
    <Sidecard
      key={index}
      icon={link.icon}
      text={link.text}
      style={{ textDecoration: "none", color: "black" }}
      data={props.data}
    />
  ));

  return (
    <div className="sideBar">
      <Router>
        <div className="shortcutLinks">
          {linkElements}
          {props.data && <hr></hr>}
        </div>
      </Router>
      {props.data && <h4>Subscriptions</h4>}
      <Subscribed data={props.data} />
    </div>
  );
}

export default Sidebar;
