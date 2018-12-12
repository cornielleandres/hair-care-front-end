import React, { Component } from "react";
import axios from "axios";
const Auth = App => LogInForm =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        err: ""
      };
    }
    handleLogIn = () => {
      this.setState({ loggedIn: true });
    };
    handleLogOut = () => {
      this.setState({ loggedIn: false });
    };
    logUserIn = credentials => {
      axios
        .post(`http://localhost:5000/api/stylists`, credentials)
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("AuthToken", token);
          this.handleLogIn();
        })
        .catch(err =>
          this.setState({ err: "Account not found,please try again" })
        );
    };
    componentDidMount() {
      if (localStorage.getItem("AuthToken")) {
        this.handleLogIn();
      }
    }
    render() {
      const { loggedIn } = this.state.loggedIn;
      return loggedIn ? (
        <App handleLogOut={this.handleLogOut} />
      ) : (
        <LogInForm />
      );
    }
  };
