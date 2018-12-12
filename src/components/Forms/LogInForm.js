import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null
    };
  }
<<<<<<< HEAD
  handleInputChange = e => {
=======
  inputChangeHandle = e => {
>>>>>>> c30c21066a56409d1748c000c1cf4e824baa439c
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
<<<<<<< HEAD
  handleSumbmit = e => {
    e.preventDefault();
    console.log("sent to backend");
    this.setState({
      email: "",
      password: ""
    });
=======
  submitHandle = e => {
    e.preventDefault();
>>>>>>> c30c21066a56409d1748c000c1cf4e824baa439c
  };
  render() {
    return (
      <div className="box">
<<<<<<< HEAD
        <form onSubmit={this.handleSumbmit}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
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
          <Link to="/home">Log In As Guest</Link>
        </form>
        <Link to="/signup">Click Here To Sign Up</Link>
=======
        <form onSubmit={this.submitHandle}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.inputChangeHandle}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.inputChangeHandle}
          />
          <Link to="/home">
            <button type="submit">Log in</button>
          </Link>
          <Link to="/">Sign in as a guest</Link>
        </form>
        <Link to="/signUp">
          <button type="submit">Click here to Sign Up</button>
        </Link>
>>>>>>> c30c21066a56409d1748c000c1cf4e824baa439c
      </div>
    );
  }
}

export default LogInForm;
