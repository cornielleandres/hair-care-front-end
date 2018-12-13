import React, { Component } from "react";
import Comments from "./CommentSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "./CommentSection";
import axios from "axios";
class Picture extends Component {
  state = {
    comment: "",
    comments: []
  };

  handleLikes = id => {
    // let likes = this.props.pictures.filter(picture => picture.id === id);
    // console.log(likes);
    // TODO  ADD LIKES ONCE BACKEND HAS THE INFO
    // this.setState({
    //   ...this.state
    // });
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
  addComments = e => {
    e.preventDefault();
    console.log(this.state);
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
      });
  };
  componentDidMount() {
    this.getAllPictureComments();
  }
  render() {
    return (
      <div className="box">
        <img
          src={
            this.props.picture.picture ||
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          }
          alt="alt"
        />
        <FontAwesomeIcon icon="heart" />
        <p onClick={() => this.handleLikes(this.props.picture.id)}>
          Likes: {this.props.picture.likes || 0}
        </p>
        <CommentSection
          comments={this.state.comments}
          picture={this.props.picture.id}
          getAllPictureComments={this.getAllPictureComments}
        />
        <form onSubmit={this.addComments}>
          <input
            name="comment"
            type="text"
            placeholder="Add a comment"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        </form>
      </div>
    );
  }
}
export default Picture;
