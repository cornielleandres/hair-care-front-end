import React, { Component } from "react";
import Axios from "axios";

class StylistSignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      profile_photo: "",
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };

    Axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/stylists/${localStorage.getItem(
        "userID"
      )}`,
      { ...this.state },
      headers
    )
      .then(res =>
        this.props.history.push(`/profile/${localStorage.getItem("userID")}`)
      )
      .catch(err => ({ err }));
  };

  render() {
    console.log(this);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="profile_photo"
            value={this.state.profile_photo}
            placeholder="picture of yourself"
            onChange={this.handleChange}
          />
          <input
            name="first_name"
            value={this.state.username}
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            name="last_name"
            value={this.state.last_name}
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            name="address"
            value={this.state.address}
            type="text"
            placeholder="Address"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="city"
            value={this.state.city}
            placeholder="City"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="state"
            value={this.state.state}
            type="text"
            placeholder="State"
            onChange={this.handleChange}
          />
          <input
            name="zip"
            value={this.state.zip}
            type="text"
            placeholder="Zip"
            onChange={this.handleChange}
          />

          <button type="submit">Edit Information</button>
        </form>
      </div>
    );
  }
}

export default StylistSignUpForm;
