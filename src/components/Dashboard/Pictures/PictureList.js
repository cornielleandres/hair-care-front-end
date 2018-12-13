import React from "react";
import Picture from "./Picture";
const PictureList = props => {
  return (
    <div className="container">
      <Picture stylist={props.stylist} />
    </div>
  );
};
export default PictureList;
