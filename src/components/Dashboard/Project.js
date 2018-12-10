import React, { Component } from "react";
import Comments from "./Comments";
const Project = ({ project }) => {
  return (
    <div className="container">
      <img src="" alt="project picture" />
      <p>likes</p>
      <Comments />
    </div>
  );
};
export default Project;
