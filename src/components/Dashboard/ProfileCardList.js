import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileCardList = ({ stylists }) => {
  return (
    <div>
      {stylists.map((stylist, i) => (
        <ProfileCard key={i} stylist={stylist} />
      ))}
    </div>
  );
};

export default ProfileCardList;
