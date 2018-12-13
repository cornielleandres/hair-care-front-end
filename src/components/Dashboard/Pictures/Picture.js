import React from "react";
import Comments from "./Comments";
const Picture = props => {
  return (
    <div className="box">
      <img src={props.picture.portfolio_picture || 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'} alt="alt" />
      <p>Likes: {props.picture.likes || 0}</p>
      <Comments comment={props.picture.comment} />
    </div>
  );
};
export default Picture;
