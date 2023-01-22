import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft md:shrink-0">
        <img src="assets/logo.png" alt="" className="logo w-16 md:w-32 lg:w-48" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="SearchIcon" />
          <input
            placeholder="Search for Friends, Post or Video"
            className="Searchinput"
            autoComplete="on"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
