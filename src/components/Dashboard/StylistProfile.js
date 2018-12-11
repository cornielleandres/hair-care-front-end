import React from "react";
import ProjectList from "./ProjectList";
const StylistProfile = props => {
  const id = props.match.params.id;

  const stylist = props.stylists.find(stylist => `${stylist.id}` === id);
  console.log("each", stylist);
  return (
    <div className="box">
      <div>
        <h4>picture</h4>
        <h4>{stylist.first_name}</h4>
        <h4>{stylist.address}</h4>
        <h4>{stylist.phone_number}</h4>
        <h4>{stylist.average_cost}</h4>
        <h4>{stylist.rating}</h4>
        <h4>description</h4>
        <h4>{stylist.social_network_link}</h4>
      </div>
      <ProjectList />
    </div>
  );
};

export default StylistProfile;
