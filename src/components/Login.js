import React from 'react';

const Login = ({ logUserIn, errMsg }) => {
	const handleSubmit = e => {
		e.preventDefault();
		const username = e.target[0].value;
		const password = e.target[1].value;
		const credentials = { username, password };

		this.props.logUserIn(credentials);
	};

	return(
		<div>
			<h1>Login Screen</h1>

			<form onSubmit = { handleSubmit }>
				<input />
				<button type = 'submit'>Login</button>
			</form>

			{ errMsg && <p>{ errMsg }</p> }
		</div>
	);
};

export default Login;
