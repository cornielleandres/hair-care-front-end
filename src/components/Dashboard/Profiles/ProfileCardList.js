import React from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

const ProfileCardList = props => {
  const { stylists } = props;
  return (
    <div>
      {stylists.map((stylist, i) => (
        <Link key={i} to={`/stylists/${stylist.id}`}>
          <ProfileCard stylist={stylist} />
        </Link>
      ))}
    </div>
  );
};
export default ProfileCardList;
