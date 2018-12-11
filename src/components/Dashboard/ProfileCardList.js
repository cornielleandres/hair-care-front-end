import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileCardList = props => {
  return (
    <div>
      {props.stylists.map((stylist, i) => <ProfileCard key = {i} stylist = {stylist} />)}
    </div>
  );
};

export default ProfileCardList;
