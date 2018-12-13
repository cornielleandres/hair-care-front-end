import React from "react";
import styled from 'styled-components';

const StyledProfileCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
`;

const ProfileCard = props => {
  const { stylist } = props;
  return (
    <StyledProfileCard>
        <h4>picture</h4>
        <h4>{stylist.first_name}</h4>
        <h4>{stylist.address}</h4>
        <h4>{stylist.phone_number}</h4>
        <h4>{stylist.average_cost}</h4>
        <h4>{stylist.rating}</h4>

        <h4>description</h4>

        <h4>{stylist.social_network_link}</h4>
    </StyledProfileCard>
  );
};

export default ProfileCard;
