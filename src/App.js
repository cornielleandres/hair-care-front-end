import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

// Components
import { Header } from "./components/index.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUpForm from "./components/Forms/SignUpForm";
import LogInForm from "./components/Forms/LogInForm.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import MyDashboard from "./components/Dashboard/MyDashboard";
// Action creators
import { getStylists } from "./store/actions/index.js";

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

  render() {
    return (
      <StyledApp>
        <Header />
        <NavBar />
        <Route exact path="/" render={() => <LogInForm />} />
        <Route path="/home" render={() => <Home />} />
        <Route path="/mydashboard" render={() => <MyDashboard />} />
        <Route path="/signup" render={() => <SignUpForm />} />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  { getStylists }
)(App);
