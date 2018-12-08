import axios from 'axios';

export const GETTING_SANITY_CHECK			= 'GETTING_SANITY_CHECK';
export const GETTING_SANITY_CHECK_COMPLETE	= 'GETTING_SANITY_CHECK_COMPLETE';
export const GETTING_SANITY_CHECK_ERROR		= 'GETTING_SANITY_CHECK_ERROR';

const backendURL = process.env.REACT_APP_BACKEND_URL;

export const getSanityCheck = () => dispatch => {
	dispatch({ type: GETTING_SANITY_CHECK });

	axios.get(`${ backendURL }/api/users/`)
		.then(res => dispatch({
			type: GETTING_SANITY_CHECK_COMPLETE,
			payload: res.data.message,
		}))
		.catch(err => dispatch({
			type: GETTING_SANITY_CHECK_ERROR,
			payload: err,
		}));
};
