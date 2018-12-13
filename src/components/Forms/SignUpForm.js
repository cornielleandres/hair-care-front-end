import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
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
      .then(res => {
        const { username, password } = this.state;
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
          username,
          password
        })
          .then(res => {
            localStorage.setItem("userToken", res.data.token);
            localStorage.setItem("hairCareUsername", username);
            this.props.handleLogIn();
          })
          .catch(err => console.log("login POST ERR", err));
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="box">
      <h1>SIGN UP</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
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
        <Link className = 'login-btn' to="/">Click Here To Log In</Link>
      </div>
    );
    // }
  }
}

export default SignUpForm;
