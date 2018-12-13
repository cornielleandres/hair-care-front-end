import React, { Component } from "react";
import axios from "axios";
const Auth = App => LoginSignUp =>
  class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        err: ""
      };
    }
    handleLogIn = (username) => {
      this.setState({ loggedIn: true }, () => {
        this.props.history.push("/home");
      });
    };
    handleLogOut = () => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("hairCareUsername");
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
      const { loggedIn, username } = this.state;
      console.log('AUTH STTE', this.state)
      return loggedIn ? (
        <App handleLogOut={this.handleLogOut} username = {username} />
      ) : (
        <LoginSignUp handleLogIn={this.handleLogIn} />
      );
    }
  };

export default Auth;
