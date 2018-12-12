import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Axios from "axios";

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
    console.log("sent to backend");
    this.setState({
      username: "",
      password: ""
    });
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
      username,
      password
    })
      .then(res => {
        localStorage.setItem("userToken", res.data.token);
        console.log(localStorage.getItem("userToken"));
        console.log("loginform", this.props);
        this.props.handleLogIn();
      })
      .catch(err => console.log("login POST ERR", err));
  };
  render() {
    return (
      <div className="box">
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
          <button type="submit">Log In</button>
        </form>
        <Link to="/signup">Click Here To Sign Up</Link>
        <Route path="/signup" component={SignUpForm} />
      </div>
    );
  }
}

export default LogInForm;
