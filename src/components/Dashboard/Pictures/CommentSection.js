import React, { Component } from "react";
import Comment from "./Comment";
import axios from "axios";
import styled from "styled-components";

const StyledCommentDiv = styled.div`
width: 100%;
`;

class CommentSection extends Component {
  deleteComments = id => {
    console.log("delete", id);
    console.log("IN DELETE", this.props);
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };

    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/comments/${id}`,
        headers
      )
      .then(res => {
        console.log("deleteComments", res);
        this.props.getAllPictureComments();
      });
    // console.log("the rest of the comments", dcomment);
    // // TODO DELETE COMMENTS ONCE BACKEND HAS INFO
    // this.setState({
    //   ...this.state,
    //   pictures: dcomment
    // });
  };
  // getAllPictureComments = () => {
  //   const token = localStorage.getItem("userToken");
  //   const headers = { headers: { Authorization: `${token}` } };
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_BACKEND_URL}/api/comments/picture/${
  //         this.props.picture
  //       }`,
  //       headers
  //     )
  //     .then(res => {
  //       this.setState({ comments: res.data });
  //     })
  //     .catch();
  // }
  componentDidMount() {
    // this.getAllPictureComments();
  }
  render() {
    const { comments } = this.props;
    return (
      <StyledCommentDiv className="container">
        {comments.map((comment, i) => (
          <Comment
            key={i}
            comment={comment}
            deleteComments={() => this.deleteComments(comment.id)}
          />
        ))}
      </StyledCommentDiv>
    );
  }
}
export default CommentSection;
