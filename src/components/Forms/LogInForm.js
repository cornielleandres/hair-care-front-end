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
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSumbmit = e => {
    e.preventDefault();
    console.log("sent to backend");
    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="box">
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
      </div>
    );
  }
}

export default LogInForm;
