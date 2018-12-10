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
  componentDidMount = () => this.props.getSanityCheck();

  render() {
    const { message } = this.props;
    return (
      <StyledApp>
        <Header />
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/logIn" component={LogInForm} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signUp" component={SignUpForm} />
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
