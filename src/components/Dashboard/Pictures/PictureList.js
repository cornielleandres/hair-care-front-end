import React, { Component } from "react";
import axios from 'axios';
import Picture from "./Picture";
export default class PictureList extends Component {
  state = {pictures: []};
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/pictures/stylist/${this.props.match.params.id}`)
      .then(res => {
        this.setState({pictures: res.data})
      })
      .catch(err => console.log(err.response))
  }
  render() {
    const {pictures} = this.state;
    return (
      <div className="container">
        {pictures.map((picture, i) => <Picture key = {i} picture={picture} />)}
      </div>
    );
  }
};
