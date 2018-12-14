import React, { Component } from "react";
import Axios from "axios";
import styled from "styled-components";

const StyledStylistProfileForm = styled.form`

`;

export default class MyProfile extends Component {
  state = {
    stylist: {
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    exists: false,
  };
  handleChange = e => {
    this.setState({
      stylist: {
        ...this.state.stylist,
        [e.target.name]: e.target.value
      }
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");
    const headers = { headers: { Authorization: `${token}` } };
    Axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/stylists/${localStorage.getItem('userID')}`, { ...this.state.stylist }, headers)
      .then(res => {/* do nothing */})
      .catch(err => console.log(err.response))
  }
  componentDidMount() {
    Axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/stylists/${localStorage.getItem("userID")}`)
      .then(res => {
        if (res.data.length) {
          this.setState({ exists: true, stylist: res.data[0] });
        }
      })
      .catch(err => console.log(err.response))
  }
  render() {
    const { exists, stylist } = this.state;
    if (exists) {
      return(
        <div>
          <img src = {stylist.profile_photo} alt = {`${stylist.first_name}`} />
          <p>First Name: {stylist.first_name}</p>
          <p>Last Name: {stylist.last_name}</p>
          <p>Address: {stylist.address}</p>
          <p>City: {stylist.city}</p>
          <p>State: {stylist.state}</p>
          <p>Zip: {stylist.zip}</p>

          <Link to = {`/profile/${localStorage.getItem('userID')}/edit`}>Edit Profile</Link>
        </div>
      );
    } else {
      return(
        <StyledStylistProfileForm onSubmit = {this.handleSubmit}>
          <h2>Create your stylist profile</h2>
          <input
            name = 'first_name'
            placeholder = 'First name'
            onChange = {this.handleChange}
            value = {this.state.stylist.first_name}
          />
          <input
            name = 'last_name'
            placeholder = 'Last name'
            onChange = {this.handleChange}
            value = {this.state.stylist.last_name}
          />
          <input
            name = 'address'
            placeholder = 'Address'
            onChange = {this.handleChange}
            value = {this.state.stylist.address}
          />
          <input
            name = 'city'
            placeholder = 'City'
            onChange = {this.handleChange}
            value = {this.state.stylist.city}
          />
          <input
            name = 'state'
            placeholder = 'State'
            onChange = {this.handleChange}
            value = {this.state.stylist.state}
          />
          <input
            name = 'zip'
            placeholder = 'Zip'
            onChange = {this.handleChange}
            value = {this.state.stylist.zip}
          />
          <input
            name = 'profile_photo'
            placeholder = 'Link to profile photo'
            onChange = {this.handleChange}
            value = {this.state.stylist.profile_photo}
          />
          <button>Submit</button>
        </StyledStylistProfileForm>
      );
    }
  }
};
