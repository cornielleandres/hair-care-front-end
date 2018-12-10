import React, { Component } from "react";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      storeName: "",
      contactNumber: "",
      isStylist: false
    };
  }

  render() {
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
