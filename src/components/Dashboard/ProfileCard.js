import React, { Component } from "react";

const ProfileCard = ({ stylist }) => {
  // console.log("card", stylist);
  return (
    <div className="box">
      <h4>picture</h4>
      <h4>{stylist.first_name}</h4>
      <h4>{stylist.address}</h4>
      <h4>{stylist.phone_number}</h4>
      <h4>{stylist.average_cost}</h4>
      <h4>{stylist.rating}</h4>

      <textarea placeholder="describe your store" />
      <h4>{stylist.social_network_link}</h4>
    </div>
  );
};

export default ProfileCard;
