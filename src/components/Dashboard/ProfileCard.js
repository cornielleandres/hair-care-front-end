import React, { Component } from "react";
import GeoMap from './GeoMap.js';

const ProfileCard = ({ stylist }) => {
  const { address, city, state, zip } = stylist;
  return (
    <div>
      <h4>picture</h4>
      <h4>name</h4>
      <h4>age</h4>
      <h4>location</h4>
      <h4>contact number</h4>
      <h4>average cost</h4>
      <textarea>description</textarea>
      <h4>links to social media</h4>
      <GeoMap address = { address } city = { city } state = { state } zip = { zip } />
    </div>
  );
};

export default ProfileCard;
