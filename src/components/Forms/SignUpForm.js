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
      location: "",
      isStylist: false
    };
  }
  handleInputChange = e => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleRadioChange = e => {
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
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
            value={this.state.password}
            required
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Store name"
            name="storeName"
            value={this.state.storeName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Contact number"
            name="contactNumber"
            value={this.state.contactNumber}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Store location"
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
          <input type="radio" name="isStylist" value={true} required />
          <h4>I'm a stylist</h4>
          <input type="radio" name="isStylist" value={false} required />
          <h4>I'm not a stylist</h4>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
    // }
  }
}

export default SignUpForm;
