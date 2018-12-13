import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";
// Components
import { Header } from "./components/index.js";
import NavBar from "./components/Layout/NavBar";
import Home from "./components/Home";
import Stylists from "./components/Dashboard/Stylists.js";
import StylistProfile from "./components/Dashboard/Profiles/StylistProfile";
// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faTimes,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

// Action creators
import { getStylists } from "./store/actions/index.js";
library.add(faEnvelope, faKey, faTimes, faHeart);

const StyledApp = styled.div`
  background-color: #c7dbf4;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 1.2rem;
  }

  .message {
    text-align: center;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      isStylist: false,
      username: ""
    };
  }

  componentDidMount() {
    this.props.getStylists(localStorage.getItem("userToken"));
    this.setState({ username: localStorage.getItem("hairCareUsername") });
  }
  render() {
    const { stylists } = this.props; //deconstructing
    return (
      <StyledApp>
        <Header />
        <NavBar handleLogOut={this.props.handleLogOut} />
        <h1>Welcome, {this.state.username}!</h1>
        <Route
          path="/home"
          render={props => <Home {...props} stylists={stylists} />}
        />
        <Route
          exact
          path="/stylists"
          render={props => <Stylists {...props} stylists={stylists} />}
        />

        <Route
          path="/stylists/:id"
          render={props => <StylistProfile {...props} />}
        />
      </StyledApp>
    );
  }
}

const mapStateToProps = state => ({
  stylists: state.stylists
});

export default connect(
  mapStateToProps,
  { getStylists }
)(App);
