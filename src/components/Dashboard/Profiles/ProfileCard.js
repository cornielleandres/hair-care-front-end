import React from "react";
import styled from 'styled-components';

const StyledProfileCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-start
flex-wrap: wrap;
flex-direction: column;
border: 5px solid #1d0b32;
border-radius: 15px;
margin: 10px 15px;
padding: 10px 3%;
width: 300px;

.stylist-info {
  display: flex;
  align-items: baseline;

  span {
    font-size: 1.8rem;
    font-weight: 900;
    color: black;
  }
}

h4 {
font-size: 1.8rem;
  color: #1D0B32;
  font-family: 'Muli';
  margin-bottom: 10px;
  
}
`;

const ProfileCard = props => {
  const { stylist } = props;
  return (
    <StyledProfileCard>
      <div className="stylist-card-img">
        <h4>picture</h4>
      </div>

      <div className="stylist-info">
        <span>Name:&nbsp;</span>
        <h4>{stylist.first_name}</h4>
      </div>
      <div className="stylist-info">
        <span>Address:&nbsp;</span>
        <h4>{stylist.address}</h4>
      </div>
      <div className="stylist-info">
        <span>Phone:&nbsp;</span>
        <h4>{stylist.phone_number}</h4>
      </div>
      <div className="stylist-info">
        <span>Average Cost:&nbsp;</span>
        <h4>{stylist.average_cost}</h4>
      </div>
      <div className="stylist-info">
        <span>Average Rating:&nbsp;</span>
        <h4>{stylist.rating}</h4>
      </div>
      <div className="stylist-info">
        <span>Bio:&nbsp;</span>
        <h4>description</h4>
      </div>
      <div className="stylist-info">
        <span>Social:&nbsp;</span>
        <h4>{stylist.social_network_link}</h4>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
