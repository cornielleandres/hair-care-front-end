import React from "react";
import ProfileCardList from "./Profiles/ProfileCardList";
import styled from 'styled-components';

const StyledStylists = styled.div`
  width: 80%;
  background: white;
  display: flex;
  flex-direction: column;
`;

const Stylists = props => {
  return (
    <StyledStylists>
      <div>
      <h1>Stylists</h1>
      </div>
      
      <ProfileCardList {...props} />
    </StyledStylists>
  );
};

export default Stylists;
