import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      storeName: "",
      contactNumber: "",
      location: "",
      isStylist: false
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleRadio = e => {
    this.setState({
      [e.target.name]: Boolean(e.target.value)
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    // if (this.state.isStylist) {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="storeName"
            placeholder="Store name"
            value={this.state.storeName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact number"
            value={this.state.contactNumber}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Store location"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
          <input
            type="radio"
            name="isStylist"
            value="true"
            onChange={this.handleRadio}
          />
          <h4>I'm a stylist</h4>
          <input
            type="radio"
            name="isStylist"
            value="false"
            onChange={this.handleRaiod}
          />
          <h4>I'm not a stylist</h4>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
    // }
  }
}

export default SignUpForm;
