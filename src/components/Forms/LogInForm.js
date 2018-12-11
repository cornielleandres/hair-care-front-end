import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    let isStylist = false;
    // e.target[2] === user
    // e.target[3] === stylists
    if (e.target[3].checked) {
      isStylist = true;
    }
    const loginCredentials = {email, password, isStylist};
    console.log(loginCredentials)
  };

  render() {
    return (
      <div className="box">
        <form onSubmit = {this.handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
          />
          <input type="radio" name="type" value="User" checked /> User<br />
          <input type="radio" name="type" value="Stylist" /> Stylist<br />
          <button type = 'submit'>Log in</button>
        </form>
        <Link to="/signUp">Click here to Sign Up</Link>
      </div>
    );
  }
}

export default LogInForm;
