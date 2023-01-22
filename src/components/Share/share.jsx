import "./share.css";
import PermMediaSharpIcon from "@mui/icons-material/PermMediaSharp";
import LabelImportantSharpIcon from "@mui/icons-material/LabelImportantSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import EmojiEmotionsSharpIcon from "@mui/icons-material/EmojiEmotionsSharp";

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="assets/person/1.jpeg" alt="" />*
          <input
            placeholder="What's in your mind Sam??"
            className="shareInput"
            type=""
          />
        </div>

        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="ShareOptions">
            <div className="shareOption">
              <PermMediaSharpIcon htmlColor="tomato" className="ShareIcon" />
              <span className="ShareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelImportantSharpIcon htmlColor="blue" className="ShareIcon" />
              <span className="ShareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnSharpIcon htmlColor="green" className="ShareIcon" />
              <span className="ShareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsSharpIcon
                htmlColor="goldenrod"
                className="ShareIcon"
              />
              <span className="ShareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
