import React from "react";
import ProfileCardList from "./ProfileCardList";
const Dashboard = ({ stylists }) => {
  // const { stylists } = props;
  return (
    <div className="container">
      <ProfileCardList stylists={stylists} />
    </div>
  );
};

export default Dashboard;
