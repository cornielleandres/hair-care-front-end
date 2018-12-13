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

  componentDidMount() {
    // console.log("CDM", this.props.match.params.id);
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/pictures/stylist/${
      this.props.match.params.id
    }`;
    // console.log("PICTURELIST URL", URL);
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .get(URL, headers)
      .then(res => {
        console.log("cdm piclist", res);
        this.setState({ pictures: res.data });
      })
      .catch(err => console.log(err.response));
  }
  render() {
    const { pictures } = this.state;
    // console.log("picturelist", pictures);
    return (
      <div className="container">
        {pictures.map((picture, i) => (
          <Picture
            key={i}
            picture={picture}
            handleLikes={this.handleLikes}
            input={this.state.input}
            handleChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}
