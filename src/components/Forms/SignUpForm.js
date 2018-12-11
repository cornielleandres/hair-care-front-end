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
      location: null,
      isStylist: false
    };
  }
  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
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
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="pasword"
            placeholder="Password"
            value={this.state.password}
          />
          <input
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Store name"
            value={this.state.storeName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Contact number"
            value={this.state.contactNumber}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Store location"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
          <input type="radio" name="isStylist" value={true} />
          <h4>I'm a stylist</h4>
          <input type="radio" name="isStylist" value={false} />
          <h4>I'm not a stylist</h4>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
    // }
  }
}

export default SignUpForm;
