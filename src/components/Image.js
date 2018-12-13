import React from "react";

const Image = ({ picture }) => {
  console.log("images", picture);
  return (
    <div>
      <img
        alt="portfolio"
        src={
          picture.picture ||
          "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
      />
      <p>Created at: {picture.created_at}</p>
    </div>
  );
};

export default Image;
