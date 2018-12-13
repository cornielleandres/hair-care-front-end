import React, { Component } from "react";
import Image from './Image';
import axios from 'axios';

export default class Home extends Component {
  state = { pictures: [] };
  componentDidMount() {
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/pictures/`, headers)
      .then(res => {
        this.setState({ pictures: res.data });
      })
      .catch(err => console.log(err.response));
  }
  render() {
    const { pictures } = this.state;
    return (
      <div>
        <h1>Home</h1>
        { pictures.map((picture, i) => <Image key = {i} picture = {picture} />)}
      </div>
    );
  }
};
