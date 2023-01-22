import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUserName">Satyam</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey this is my first post</span>
          <img className="postImage" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="likeCounter">32 people like it</span>
          </div>

          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>

        </div>
      </div>
    </div>
  );
}
