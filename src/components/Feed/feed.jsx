import Share from '../Share/share';
import './feed.css';
import Post from '../post/post';


export default function feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    </div>
  )
}
