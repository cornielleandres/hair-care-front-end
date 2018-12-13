import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

//font awesome

const StyledLoginComp = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: black;
  transform: translate(-50%, -50%);

  h1 {
    text-align: center;
    font-size: 40px;
    border-bottom: 3px solid black;
    margin-bottom: 50px;
    padding: 13px 0;
  }
  form {
    input {
      overflow: hidden;
      width: 100%;
      font-size: 20px;
      padding: 8px 0;
      margin: 8px 0;
      border-bottom: 3px solid black;
    }

    .login-btn {
    }
  }

  .sign-up-btn {
  }
`;

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSumbmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
      username,
      password
    })
      .then(res => {
        localStorage.setItem("userToken", res.data.token);
        localStorage.setItem("hairCareUsername", username);
        this.props.handleLogIn();
      })
      .catch(err => console.log("login POST ERR", err));
  };
  render() {
    return (
      <StyledLoginComp>
        <h1>LOG IN</h1>
        <form onSubmit={this.handleSumbmit}>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button className="login-btn" type="submit">
            Log In
          </button>
        </form>
        <Link className="sign-up-btn" to="/signup">
          Click Here To Sign Up
        </Link>
      </StyledLoginComp>
    );
  }
}

export default LogInForm;
