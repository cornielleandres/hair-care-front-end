import React from "react";
import Comments from "./CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "./CommentSection";
const Picture = props => {
  console.log("pictures", props);
  return (
    <div className="box">
      <img
        src={
          props.picture.picture ||
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
        alt="alt"
      />
      <FontAwesomeIcon icon="heart" />
      <p onClick={() => props.handleLikes(props.picture.id)}>
        Likes: {props.picture.likes || 0}
      </p>
      <CommentSection picture={props.picture.id} />
      <form onSubmit={props.addComments}>
        <input
          name="comment"
          type="text"
          placeholder="Add a comment"
          onChange={props.handleChange}
          value={props.input}
        />
      </form>
    </div>
  );
};
export default Picture;
