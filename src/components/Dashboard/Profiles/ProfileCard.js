import React from "react";
import styled from "styled-components";

const StyledProfileCard = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
flex-direction: column;
border: 5px solid pink;
border-radius: 15px;
margin: 10px 15px;
padding: 10px 3%;
width: 325px;
background: #1d0b32;

.stylist-card-img {
  margin: 15px 0;

  img {
    border-radius: 15px;
    max-width: 300px;
    max-height: 300px;
  }
}

.stylist-info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    font-size: 1.8rem;
    font-weight: 900;
    color: pink;
  }
}

h4 {
font-size: 1.8rem;
  color: pink;
  font-family: 'Muli';
  margin-bottom: 10px;
  
}
`;

const ProfileCard = props => {
  const { stylist } = props;
  return (
    <StyledProfileCard>
      <div className="stylist-card-img">
        <img src={stylist.profile_photo} alt="picture" />
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
        <span>City:&nbsp;</span>
        <h4>{stylist.city}</h4>
      </div>
      <div className="stylist-info">
        <span>State:&nbsp;</span>
        <h4>{stylist.state}</h4>
      </div>
      <div className="stylist-info">
        <span>Zip:&nbsp;</span>
        <h4>{stylist.zip}</h4>
      </div>
    </StyledProfileCard>
  );
};

export default ProfileCard;
