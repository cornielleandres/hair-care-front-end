import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components
import {
	Header,
} from './components/index.js';

// Action creators
import {
	getSanityCheck,
} from './store/actions/index.js';

const StyledApp = styled.div`
	background-color: #c7dbf4;
	min-height: 100vh;

	.message {
		text-align: center;
	}
`;

class App extends Component {
	componentDidMount = () => this.props.getSanityCheck();

	render() {
		const { message, handleLogout } = this.props;
		return (
			<StyledApp>
				<Header />
				<p className = 'message'>{ message }</p>

				<button onClick = { handleLogout }>Logout</button>
			</StyledApp>
		);
	}
};

const mapStateToProps = state => ({
	message: state.message,
});

export default connect(mapStateToProps, { getSanityCheck })(App);
