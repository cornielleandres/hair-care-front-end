import React, { Component } from "react";
import Comment from "./Comment";
import axios from "axios";
class CommentSection extends Component {
  state = { comments: [] };
  addComments = e => {
    e.preventDefault();
    // let theOne = this.state.pictures.filter(
    // picture => picture.picture_id === id
    // );
    // console.log(theOne);
    this.setState({
      pictures: [...this.state.pictures, { comment: this.state.input }],
      input: ""
    });
  };
  deleteComments = id => {
    console.log("delete", id);
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };

    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/comments/${id}`,
        headers
      )
      .then(res => {
        console.log("deleteComments", res);
        axios
          .get(
            `${process.env.REACT_APP_BACKEND_URL}/api/comments/picture/${
              this.props.picture
            }`,
            headers
          )
          .then(res => {
            this.setState({ comments: res.data });
          })
          .catch();
      });
    // console.log("the rest of the comments", dcomment);
    // // TODO DELETE COMMENTS ONCE BACKEND HAS INFO
    // this.setState({
    //   ...this.state,
    //   pictures: dcomment
    // });
  };
  componentDidMount() {
    console.log("CS PROPS", this.props);
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/comments/picture/${
          this.props.picture
        }`,
        headers
      )
      .then(res => {
        this.setState({ comments: res.data });
      })
      .catch();
  }
  render() {
    const { comments } = this.state;
    return (
      <div className="container">
        {comments.map((comment, i) => (
          <Comment
            key={i}
            comment={comment}
            deleteComments={this.deleteComments}
            addComments={this.addComments}
          />
        ))}
      </div>
    );
  }
}
export default CommentSection;
