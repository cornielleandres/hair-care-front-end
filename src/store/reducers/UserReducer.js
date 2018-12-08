// Actions
import {
	GETTING_SANITY_CHECK,
	GETTING_SANITY_CHECK_COMPLETE,
	GETTING_SANITY_CHECK_ERROR,
} from "../actions/index.js";

// Initial state
const initialState = {
	message: '',
};

// Reducer
export const UserReducer = (state = initialState, action) => {
	switch(action.type) {
		case GETTING_SANITY_CHECK_COMPLETE: {
			return {
				...state,
				message: action.payload,
			};
		}

		case GETTING_SANITY_CHECK:
		case GETTING_SANITY_CHECK_ERROR:
		default:
			return state;
	}
};
