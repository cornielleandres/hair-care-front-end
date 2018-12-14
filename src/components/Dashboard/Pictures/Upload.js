import React, { Component } from 'react';
import Axios from 'axios';

export default class Upload extends Component {
	state = {picture: ''};
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const token = localStorage.getItem("userToken");
		const headers = { headers: { Authorization: `${token}` } };
		Axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/api/pictures/stylist/${localStorage.getItem('userID')}`, { picture: this.state.picture, user_id: localStorage.getItem('userID') }, headers)
			.then(res => {
				this.props.history.push(`/profile/${localStorage.getItem("userID")}`);
		})
		.catch(err => console.log(err.response))
	}
	render() {
		return(
			<form onSubmit = {this.handleSubmit}>
				<input
					name = 'picture'
					placeholder = 'Link to picture'
					onChange = {this.handleChange}
					value = {this.state.picture}
				/>
				<button type='submit'>Submit</button>
			</form>
		);
	}
};
