import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comment = props => {
  console.log(props);
  return (
    <div>
      <p>{props.comment}</p>
      <FontAwesomeIcon
        icon="times"
        onClick={() => props.deleteComments(props.comment)}
      />
    </div>
  );
};
export default Comment;
