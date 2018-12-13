import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = props => {
  console.log("comments", props);
  return (
    <div>
      <p>{props.comment.comment}</p>
      <FontAwesomeIcon
        icon="times"
        onClick={() => props.deleteComments(props.comment.id)}
      />
    </div>
  );
};
export default Comment;
