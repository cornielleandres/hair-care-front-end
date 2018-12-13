import React from 'react';

const Image = ({picture}) => {
	return(
		<div>
			<img alt="portfolio" src={picture.portfolio_picture || 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'} />
			<p>Created at: {picture.created_at}</p>
		</div>
	);
};

export default Image;
