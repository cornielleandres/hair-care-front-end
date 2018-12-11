import React from "react";
import ProfileCardList from "./ProfileCardList";
import { connect } from "react-redux";

// Action creators
import { getStylists } from '../../store/actions/index.js'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getStylists();
  }
  render() {
    return (
      <div className="container">
        <ProfileCardList stylists = {this.props.stylists} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  stylists: state.stylists,
});

export default connect(mapStateToProps, { getStylists })(Dashboard);