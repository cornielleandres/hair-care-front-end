import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      name: null,
      storeName: null,
      contactNumber: null,
      Location: null,
      isStylist: false
    };
  }

  render() {
    if (this.state.isStylist) {
      return (
        <div className="box">
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="pasword" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Store name" />
            <input type="text" placeholder="Contact number" />
            <input type="text" placeholder="Store location" />
            <button>Sign Up</button>
          </form>
        </div>
      );
    }

    return (
      <div className="box">
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="pasword" placeholder="Password" />
          <input type="text" placeholder="What should we call you?" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
