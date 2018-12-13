import React from "react";
import styled from 'styled-components';

const StyledProfileCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  border: 5px solid #1d0b32;
  border-radius: 15px;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;

  h4 {
  font-size: 1.4rem;
    color: #1D0B32;
    text-decoration: none;
    font-family: 'Muli';
    margin-bottom: 10px;
    
  }
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
