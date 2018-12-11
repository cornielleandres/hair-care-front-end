import axios from 'axios';

export const GETTING_STYLISTS_CHECK				= 'GETTING_STYLISTS_CHECK';
export const GETTING_STYLISTS_CHECK_COMPLETE	= 'GETTING_STYLISTS_CHECK_COMPLETE';
export const GETTING_STYLISTS_CHECK_ERROR		= 'GETTING_STYLISTS_CHECK_ERROR';

export const LOGGING_IN				= 'LOGGING_IN';
export const LOGGING_IN_COMPLETE	= 'LOGGING_IN_COMPLETE';
export const LOGGING_IN_ERROR		= 'LOGGING_IN_ERROR';

const backendURL = process.env.REACT_APP_BACKEND_URL;

export const getStylists = () => dispatch => {
	dispatch({ type: GETTING_STYLISTS_CHECK });

	axios.get(`${ backendURL }/api/stylists/`)
		.then(res => {
			dispatch({
				type: GETTING_STYLISTS_CHECK_COMPLETE,
				payload: res.data, // an array of objects
			})
		})
		.catch(err => dispatch({
			type: GETTING_STYLISTS_CHECK_ERROR,
			payload: err,
		}));
};
