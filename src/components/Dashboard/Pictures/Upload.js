import React, { Component } from 'react';
import Axios from 'axios';
import styled from "styled-components";

const StyledImgUploadForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 100px;

  input {
    padding: 15px;
      border: 3px solid #f9899e;
      border-radius: 12px;
      margin-bottom: 25px;
      width: 100%;
      font-size: 1.8rem;
      font-family: 'Muli';

      :focus {
        outline: none;
        font-size: 1.8rem;
        color: #4947e5;
        font-weight: 800;
      }

      ::placeholder {
        font-size: 1.8rem;
      }
  }

  button {
    border: 2px solid #f9899e;
      border-radius: 15px;
      background: #1d0b32;
      color: #f9899e;
      font-size: 1.8rem;
      font-family: 'Muli';
      padding: 10px 20px;
      margin-top: 20px;
      margin-bottom: 15px;
      cursor: pointer;

      :hover {
        transform: scale(1.1,1.1);
        background-color: #4947e5;
      }
  }
`;

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
			<StyledImgUploadForm onSubmit = {this.handleSubmit}>
				<input
					name = 'picture'
					placeholder = 'Link to picture'
					onChange = {this.handleChange}
					value = {this.state.picture}
				/>
				<button type='submit'>Submit</button>
			</StyledImgUploadForm>
		);
	}
};
