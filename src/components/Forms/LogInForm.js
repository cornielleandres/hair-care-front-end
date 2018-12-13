import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
const StyledLoginComp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 50px;
border: 5px solid #1D0B32;
border-radius: 15px;
width: 40%;
margin: 75px auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

      input {
        // display: block;
        padding: 15px;
        border: 3px solid #F9899E;
        border-radius: 12px;
        margin-bottom: 25px;
        width: 50%;
        font-size: 1.1rem;

        @media (max-width: 800px) {
          width: 60%;
        }

        @media (max-width: 500px) {
          width: 75%;
        }

        :focus {
          outline: none;
          font-size: 1.1rem;
          color: #4947E5;
        }

        ::placeholder {
          font-size: 1.1rem;
        }
      }

      .login-btn-container {
        display: flex;
        justify-content: center;

        .login-btn {
          border: 2px solid #F9899E;
          border-radius: 15px;
          background: #1D0B32;
          color: #F9899E;
          font-size: 1.1rem;
          padding: 10px 20px;
          margin-top: 20px;
          margin-bottom: 15px;
        }
      }
    }

    .sign-up {
      color: #F9899E;
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
        <h1>Stylogue</h1>
        <form onSubmit={this.handleSumbmit}>
          <div>
            <FontAwesomeIcon icon="envelope" />
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div>
            <FontAwesomeIcon icon="key" />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              autoComplete="off"
            />
          </div>
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
