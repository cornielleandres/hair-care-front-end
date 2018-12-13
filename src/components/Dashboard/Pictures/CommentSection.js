import React from "react";
import Comment from "./Comment";
const CommentSection = props => {
  console.log(props);
  return (
    <div className="container">
      <Comment
        comment={props.comment}
        deleteComments={props.deleteComments}
        addComments={props.addComments}
      />
    </div>
  );
};
export default CommentSection;
