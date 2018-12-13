import React, { Component } from "react";
import axios from "axios";
import Picture from "./Picture";
export default class PictureList extends Component {
  state = { pictures: [], input: "" };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  handleLikes = id => {
    let likes = this.state.pictures.filter(picture => picture.id === id);
    // console.log(likes);

    // TODO  ADD LIKES ONCE BACKEND HAS THE INFO

    // this.setState({
    //   ...this.state
    // });
  };
  addComments = e => {
    console.log("hiiiiiiiiiii");
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
  deleteComments = comment => {
    const dcomment = this.state.pictures.filter(
      picture => picture.comment !== comment
    );
    // TODO DELETE COMMENTS ONCE BACKEND HAS INFO
    // this.setState({
    //   ...this.state,
    //   pictures: dcomment
    // });
  };
  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/api/pictures/stylist/${
          this.props.match.params.id
        }`
      )
      .then(res => {
        this.setState({ pictures: res.data });
      })
      .catch(err => console.log(err.response));
  }
  render() {
    const { pictures } = this.state;
    return (
      <div className="container">
        {pictures.map((picture, i) => (
          <Picture
            key={i}
            picture={picture}
            handleLikes={this.handleLikes}
            deleteComments={this.deleteComments}
            addComments={this.addComments}
            input={this.state.input}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}
