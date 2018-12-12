import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import { div } from "gl-matrix/src/gl-matrix/vec3";

const Home = props => {
  // console.log("home", props);
  return (
    <div>
      <h1>hiiiiii</h1>
      <Dashboard {...props} />
    </div>
  );
};

export default Home;
