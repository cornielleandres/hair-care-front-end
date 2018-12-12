import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
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
    const { username, password, isStylist } = this.state;
    console.log(this.state);
    Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, {
      username,
      password,
      isStylist
    })
      .then(res => console.log("signup", res))
      .catch(err => console.log(err));
  };

  render() {
    // if (this.state.isStylist) {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="username"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
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
            required
          />
          <h4>I'm a stylist</h4>
          <input
            type="radio"
            name="isStylist"
            value="false"
            onChange={this.handleRaiod}
            required
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
