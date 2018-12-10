import React, { Component } from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="container">
      <ProfileCard />
      <Project />
    </div>
  );
};
export default ProjectList;
