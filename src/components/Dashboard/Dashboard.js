import React from "react";
import ProfileCardList from "./Profiles/ProfileCardList";
const Dashboard = props => {
  console.log("dash", props);
  return (
    <div className="container">
      <ProfileCardList {...props} />
    </div>
  );
};

export default Dashboard;
