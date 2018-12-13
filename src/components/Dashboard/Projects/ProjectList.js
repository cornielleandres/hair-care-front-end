import React from "react";
import Project from "./Project";
const ProjectList = props => {
  console.log("*******", props);
  return (
    <div className="container">
      <Project stylist={props.stylist} />
      {/* {props.stylist.specialty.map(stylist => (
        <Project key={stylist.id} project={stylist} />
      ))} */}
    </div>
  );
};
export default ProjectList;
