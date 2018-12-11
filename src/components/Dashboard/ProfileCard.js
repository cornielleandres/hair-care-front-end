import React from "react";
const ProfileCard = props => {
  // console.log("card", props);
  const { stylist } = props;
  // console.log("individual", props.stylists);
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
    </div>
  );
};

export default ProfileCard;
