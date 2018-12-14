import React, { Component } from "react";
import Image from './Image';
import axios from 'axios';
import styled from "styled-components";

const StyledHomeContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


h1 {
  padding-bottom: 10px;
}
`;

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
      <StyledHomeContainer className = "home-container">
        <h1>Home</h1>
        { pictures.map((picture, i) => <Image key = {i} picture = {picture} />)}
      </StyledHomeContainer>
    );
  }
};
