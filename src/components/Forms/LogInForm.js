import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from 'styled-components';

const StyledLoginComp = styled.div`
  form {
    input {}

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
          <button className = 'login-btn' type="submit">Log In</button>
        </form>
        <Link className = 'sign-up-btn' to="/signup">Click Here To Sign Up</Link>
      </StyledLoginComp>
    );
  }
}

export default LogInForm;
