import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

// Components
import { Header } from "./components/index.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpForm from "./components/Forms/SignUpForm";
import UserSignUpForm from "./components/Forms/UserSignUpForm";
import StylistSignUpForm from "./components/Forms/StylistSignUpForm";
import LogInForm from "./components/Forms/LogInForm.js";
import Dashboard from "./components/Dashboard/Dashboard.js";

// Action creators
import { getSanityCheck } from "./store/actions/index.js";

const StyledApp = styled.div`
  background-color: #c7dbf4;
  min-height: 100vh;

  .message {
    text-align: center;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      credentials: []
    };
  }

  componentDidMount = () => this.props.getSanityCheck();

  render() {
    return (
      <StyledApp>
        <Header />
        <NavBar />
        <Route exact path="/home" render={props => <Home {...props} />} />
        <Route path="/logIn" render={props => <LogInForm {...props} />} />
        <Route
          path="/:userType/dashboard"
          render={props => <Dashboard {...props} />}
        />
        <Route path="/signUp" render={props => <SignUpForm {...props} />} />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  { getSanityCheck }
)(App);
