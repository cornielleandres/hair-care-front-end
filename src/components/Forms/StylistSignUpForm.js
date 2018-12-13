import React, { Component } from "react";

class StylistSignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      storeName: "",
      contactNumber: "",
      isStylist: true
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
            <button>Sign Up</button>
          </form>
        </div>
      );
    }
  }
}

export default StylistSignUpForm;
