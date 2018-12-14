import React from "react";
import styled from "styled-components";

const StyledHomeImgContainer = styled.div`
width: 100%;
max-width: 600px;
display: flex;
justify-content: center;
padding-top: 20px;

img {
  margin:0 auto;
  margin-bottom: 50px;
  border: 5px solid #1d0b32;
  border-radius: 15px;
  max-width: 300px;
  max-height: 300px;
  width: auto;
  height: auto;
}
`;

const Image = ({picture}) => {
  return (
    <StyledHomeImgContainer className="home-img-container">
      <img
        alt="portfolio"
        src={
          picture.picture ||
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
      />
      <p>Created at: {picture.created_at}</p>
    </StyledHomeImgContainer>
  );
};

export default Image;
