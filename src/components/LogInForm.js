import React, { Component } from "react";

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
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
