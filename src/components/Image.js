import React from "react";
import styled from "styled-components";

const StyledHomeImgContainer = styled.div`
width: 75%;
max-width: 600px;
display: flex;
justify-content: center;
padding-top: 20px;

img {
  margin-bottom: 50px;
  border: 5px solid black;
  border-radius: 15px;
}
`;

const Image = ({ picture }) => {
  return (
    <StyledHomeImgContainer className="home-img-container">
      <img
        alt="portfolio"
        src={
          picture.picture ||
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
      />
    </StyledHomeImgContainer>
  );
};

export default Image;
