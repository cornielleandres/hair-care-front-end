import React from "react";
import ProfileCardList from "./Profiles/ProfileCardList";
const Dashboard = props => {
  return (
    <div className="container">
      <h1>DashBoard</h1>
      <ProfileCardList {...props} />
    </div>
  );
};

export default Dashboard;
