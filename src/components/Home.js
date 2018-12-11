import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import MyDashboard from "./Dashboard/MyDashboard";
import { connect } from "react-redux";

//action creators
import { getStylists } from "../store/actions/index.js";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isStylist: false
    };
  }
  componentDidMount() {
    // console.log("cdm home", this.props);
    this.props.getStylists();
  }
  render() {
    return this.state.isStylist ? (
      <MyDashboard {...this.props} />
    ) : (
      <Dashboard {...this.props} />
    );
  }
}
const mapStateToProps = state =>
  // console.log("stp", state),
  ({
    stylists: state.stylists
  });

export default connect(
  mapStateToProps,
  { getStylists }
)(Home);
