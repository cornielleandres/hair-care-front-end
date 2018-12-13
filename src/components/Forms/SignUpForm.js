import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSignUpForm = styled.div`
  font-family: sans-serif;
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  color: black;
  transform: translate(-50%, -50%);
  text-align: center;

  h1 {
    font-size: 36px;
    border-bottom: 2px solid black;
    // border-radius: 3%;
    margin-bottom: 30px;
    padding: 12px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      width: 100%;
      font-size: 20px;
      padding: 10px 0;
      margin: 10px 0;
      border-bottom: 2px solid black;
    }
    .radio-container {
      justify-content: center;
      vertical-align: middle;
    }
    input {
      outline: none;
      border: none;
      color: black;
      background: none;
      font-size: 20px;
      margin: 0 10px;
    }

    .signup-btn {
      margin: 20px auto 30px auto;
      border: 1px solid black;
      background: none;
      width: 50%;
      transition: all 0.3s ease-in-out;
      :hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
  }

  .login-btn {
    text-decoration: none;
    border-bottom: 1px solid black;
    color: black;
  }
`;
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isStylist: false
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleRadio = e => {
    this.setState({
      [e.target.name]: Boolean(e.target.value)
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { username, password, isStylist } = this.state;
    console.log(this.state);
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, {
      username,
      password,
      isStylist
    })
      .then(res => {
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
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <StyledSignUpForm>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <FontAwesomeIcon icon="key" />
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <label htmlFor="isStylist">Are You a Stylist?</label>
          <div className="radio-container">
            <input
              type="radio"
              name="isStylist"
              value="true"
              onChange={this.handleRadio}
              required
            />
            <h4>Yes</h4>
            <input
              type="radio"
              name="isStylist"
              value="false"
              onChange={this.handleRaiod}
              required
            />
            <h4>No</h4>
          </div>
          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>
        <Link className="login-btn" to="/">
          Click Here To Log In
        </Link>
      </StyledSignUpForm>
    );
    // }
  }
}

export default SignUpForm;
