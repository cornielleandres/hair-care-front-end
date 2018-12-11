import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";

import { connect } from "react-redux";

//action creators
import { getStylists } from "../store/actions/index.js";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      stylists: []
    };
  }
  componentDidMount() {
    this.props.getStylists();
  }
  render() {
    return <Dashboard />;
  }
}
const mapStateToProps = state => (
  console.log("STP", state),
  {
    stylists: state.stylists
  }
);

export default connect(
  mapStateToProps,
  { getStylists }
)(Home);
