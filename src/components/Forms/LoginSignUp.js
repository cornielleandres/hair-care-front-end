import React from 'react';
import { Route } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LogInForm";

const LoginSignUp = () => {
	return(
		<div>
			<Route exact path="/" component={LoginForm} />
			<Route path="/signup" component={SignUpForm} />
		</div>
	);
};

export default LoginSignUp;
