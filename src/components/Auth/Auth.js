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
      this.setState({ loggedIn: true }, () => {
        this.props.history.push("/home");
      });
    };
    handleLogOut = () => {
      localStorage.removeItem("userToken");
      this.setState({ loggedIn: false }, () => {
        this.props.history.push("/");
      });
    };
    logUserIn = credentials => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/stylists`, credentials)
        .then(res => {
          const token = res.data.token;
          localStorage.setItem("userToken", token);
          this.handleLogIn();
        })
        .catch(err =>
          this.setState({ err: "Account not found,please try again" })
        );
    };
    componentDidMount() {
      if (localStorage.getItem("userToken")) {
        this.handleLogIn();
      }
    }
    render() {
      const { loggedIn } = this.state;
      return loggedIn ? (
        <App handleLogOut={this.handleLogOut} />
      ) : (
        <LogInForm handleLogIn={this.handleLogIn} />
      );
    }
  };

export default Auth;
