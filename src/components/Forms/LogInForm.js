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
  inputChangeHandle = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandle = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="box">
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
      </div>
    );
  }
}

export default LogInForm;
