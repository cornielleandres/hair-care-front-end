import React, { Component } from "react";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <ProfileCard />
        <ProjectList />
      </div>
    );
  }
}
export default Dashboard;
