import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background:
  .icon {
    width: 15px;
    height: auto;
  }
`;
const Comment = props => {
  return (
    <StyledDiv>
      <p>{props.comment.comment}</p>
      <div>
        <FontAwesomeIcon
          className="icon"
          icon="times"
          onClick={() => props.deleteComments(props.comment.id)}
        />
      </div>
    </StyledDiv>
  );
};
export default Comment;
