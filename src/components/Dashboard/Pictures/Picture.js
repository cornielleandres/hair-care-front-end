import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "./CommentSection";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid red;
  // display: flex;
`;
const StyledCommentSection = styled.div`
  border: 1px solid blue;
  display: flex;
`;
class Picture extends Component {
  state = {
    comment: "",
    comments: [],
    likes: 0,
    liked: false
  };
  handleLikes = e => {
    if (this.state.liked) {
      this.setState({
        likes: this.state.likes - 1,
        liked: !this.state.liked
      });
    } else {
      this.setState({
        likes: this.state.likes + 1,
        liked: !this.state.liked
      });
    }
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getAllPictureComments = () => {
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/comments/picture/${
          this.props.picture.id
        }`,
        headers
      )
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch();
  };
  getPictureLikes = () => {
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    // console.log("likes pic ", this.props.picture.id);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/likes/picture/${
          this.props.picture.id
        }`,
        headers
      )
      .then(res => {
        this.setState({
          likes: res.data[0].likes
        });
      });
  };
  addComments = e => {
    e.preventDefault();
    // console.log(this.state);
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/comments/picture/${
          this.props.picture.id
        }`,
        { comment: this.state.comment },
        headers
      )
      .then(res => {
        this.getAllPictureComments();
        this.setState({ ...this.state, comment: "" });
      })
      .catch(err => ({ err }));
  };
  componentDidMount() {
    this.getAllPictureComments();
    this.getPictureLikes();
  }
  render() {
    return (
      <StyledDiv>
        <img
          src={
            this.props.picture.picture ||
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt="alt"
        />
        <p onClick={this.handleLikes}>
          <FontAwesomeIcon icon="heart" /> {this.state.likes}
        </p>
        <StyledCommentSection>
          <CommentSection
            comments={this.state.comments}
            picture={this.props.picture.id}
            getAllPictureComments={this.getAllPictureComments}
          />
        </StyledCommentSection>
        <form onSubmit={this.addComments}>
          <input
            name="comment"
            type="text"
            placeholder="Add a comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        </form>
      </StyledDiv>
    );
  }
}
export default Picture;
