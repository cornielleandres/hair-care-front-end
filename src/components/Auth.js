import React, { Component } from 'react';

const Auth = App => Login => class extends Component {
	state = { loggedIn: false, errMsg: '' };

	handleLogin = () => this.setState({ loggedIn: true, errMsg: '' });

	handleLogout = () => {
		localStorage.removeItem('HairCareToken');
		this.setState({ loggedIn: false });
	}

	logUserIn = credentials => {
		Axios.post(`http`, credentials)
		.then(res => {
			// you get here, that means the credentials were accepted
			// so log in the user
			const token = res.data.token;
			localStorage.setItem('HairCareToken', token);

			this.handleLogin();
		})
		.catch(err => this.setState({ errMsg: 'some error here.'}))
	};

	componentDidMount() {
		if (localStorage.getItem('HairCareToken')) {
			this.handleLogin();
		}
	}

	render() {
		const { loggedIn } = this.state;
		if (loggedIn) {
			return <App handleLogout = { this.handleLogout } />
		} else {
			return <Login errMsg = { errMsg } logUserIn = { this.logUserIn } />
		}
	}
};

export default Auth;
