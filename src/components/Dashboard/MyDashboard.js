import React, { Component } from "react";
import ProfileCard from "./Profiles/ProfileCard";
import ProjectList from "./Projects/ProjectList";
const MyDashboard = props => {
  console.log("mydash", props);

  return (
    <div className="container">
      <ProfileCard stylists={props.stylists} />
      <ProjectList {...props} />
    </div>
  );
};

export default MyDashboard;
