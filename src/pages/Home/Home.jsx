import Topbar from "../../components/Topbar/Topbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/feed";
import RightBar from "../../components/Rightbar/Rightbar";
import "./Home.css";

export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homecontainer">
    <Sidebar/>
    <Feed />
    <RightBar />
    </div>
    
     </>
  )
}
