import React, { Component } from "react";
import Axios from "axios";

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
    exists: true,
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
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err.response))
  }
  componentDidMount() {
    Axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/stylists/${localStorage.getItem("userID")}`)
      .then(res => {
        if (!res.data.length) {
          this.setState({ exists: false});
        } else {
          console.log('res.data has length', res)
        }
      })
      .catch(err => console.log(err.response))
  }
  render() {
    const { exists } = this.state;
    if (exists) {
      return(
        <div>
          MyProfile exists
        </div>
      );
    } else {
      return(
        <form onSubmit = {this.handleSubmit}>
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
          <button>Submit</button>
        </form>
      );
    }
  }
};
