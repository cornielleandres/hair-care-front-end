import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	h1 {
		font-size: 4rem;
		text-align: center;
		padding: 20px;
		font-family: 'Fredoka One';
		color: #1d0b32;
	}
`;

const Header = () => {
	return(
		<StyledHeader>
			<h1>Stylogue</h1>
		</StyledHeader>
	);
};

export default Header;
