import React from "react";
import ProfileCardList from "./Profiles/ProfileCardList";
import styled from 'styled-components';

const StyledStylists = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;

  .stylists {
    margin-bottom: 25px;
  }
`;

const Stylists = props => {
  return (
    <StyledStylists>
      <div>
      <h1 className="stylists">Stylists</h1>
      </div>
      
      <ProfileCardList {...props} />
    </StyledStylists>
  );
};

export default Stylists;
