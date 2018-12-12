import React from "react";
import { Route, Link } from "react-router-dom";
import ProjectList from "../Projects/ProjectList";

import GeoMap from "../Projects/GeoMap.js";

const StylistProfile = ({ stylist }) => {
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
        <GeoMap
          address={stylist.address}
          city={stylist.city}
          state={stylist.state}
          zip={stylist.zip}
          id={stylist.id}
        />
      </div>
      <Link to={`/stylists/${stylist.id}/projects`}>View Projects</Link>
      <Route
        path="/stylists/:id/projects"
        render={props => <ProjectList {...props} stylist={stylist} />}
      />
    </div>
  );
};

export default StylistProfile;
