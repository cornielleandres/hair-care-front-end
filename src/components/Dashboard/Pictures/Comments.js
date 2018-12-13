import React from "react";
import Comment from "./Comment";
const Comments = (props) => {
    return (
      <div className="container">
        <Comment comment = {props.comment} />
      </div>
    );
}
export default Comments;
