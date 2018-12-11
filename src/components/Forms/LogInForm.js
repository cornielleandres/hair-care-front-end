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

  render() {
    return (
      <div className="box">
        <form action="">
          <input type="email" placeholder="Enter email" />
          <input type="pasword" placeholder="Enter password" />
          <Link to="/">Log in</Link>
          <Link to="/">Sign in as a guest</Link>
        </form>
        <Link to="/signUp">Click here to Sign Up</Link>
      </div>
    );
  }
}

export default LogInForm;
