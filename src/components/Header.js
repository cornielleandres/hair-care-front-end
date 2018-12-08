import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
	h1 {
		font-size: 1.6rem;
		text-align: center;
		padding: 20px;
	}
`;

const Header = () => {
	return(
		<StyledHeader>
			<h1>HairCare</h1>
		</StyledHeader>
	);
};

export default Header;
