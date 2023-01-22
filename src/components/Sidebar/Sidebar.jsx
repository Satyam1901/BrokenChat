import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  Work,
  Event,
  School,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarlistItemText">Feed</span>
          </li>
          <li className="sidebarListitem">
            <Chat className="sidebarIcon" />
            <span className="sidebarlistItemText">Chats</span>
          </li>
          <li className="sidebarListitem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarlistItemText">Video</span>
          </li>
          <li className="sidebarListitem">
            <Group className="sidebarIcon" />
            <span className="sidebarlistItemText">Group</span>
          </li>
          <li className="sidebarListitem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarlistItemText">Bookmarks</span>
          </li>
          <li className="sidebarListitem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarlistItemText">Questions</span>
          </li>
          <li className="sidebarListitem">
            <Work className="sidebarIcon" />
            <span className="sidebarlistItemText">Jobs</span>
          </li>
          <li className="sidebarListitem">
            <Event className="sidebarIcon" />
            <span className="sidebarlistItemText">Events</span>
          </li>
          <li className="sidebarListitem">
            <School className="sidebarIcon" />
            <span className="sidebarlistItemText">Courses</span>
          </li>
        </ul>

        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarHR" />

        <ul className="sidebarfriendlist">
          <li className="sidebarfriend">
            <img
              src="/assets/person/3.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Satyam Singh</span>
          </li>

          <li className="sidebarfriend">
            <img
              src="/assets/person/4.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Vani Sharma</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/5.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Sam Vats</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/6.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Niharika Gupta</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/7.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Shivam Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
          <li className="sidebarfriend">
            <img
              src="/assets/person/9.jpeg"
              alt=""
              className="sidebarFriendImage"
            />
            <span className="sidebarFriendName">Ankit Singh</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
