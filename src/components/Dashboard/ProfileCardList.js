import React from "react";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";

const ProfileCardList = props => {
  console.log("list***", props);
  const { stylists } = props;
  return (
    <div>
      {stylists.map((stylist, i) => (
        <Link to={`/stylists/${stylist.id}`}>
          <ProfileCard key={i} stylist={stylist} />
        </Link>
      ))}
    </div>
  );
};
export default ProfileCardList;
