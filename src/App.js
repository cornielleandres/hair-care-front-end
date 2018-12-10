import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";

// Components
import { Header } from "./components/index.js";
import NavBar from "./components/NavBar";
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
        <p className="message">{message}</p>
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
