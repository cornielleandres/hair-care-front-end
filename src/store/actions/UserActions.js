import axios from "axios";

export const GETTING_STYLISTS_CHECK = "GETTING_STYLISTS_CHECK";
export const GETTING_STYLISTS_CHECK_COMPLETE =
  "GETTING_STYLISTS_CHECK_COMPLETE";
export const GETTING_STYLISTS_CHECK_ERROR = "GETTING_STYLISTS_CHECK_ERROR";

const URL = "http://localhost:5000/api/stylists";

export const getStylists = () => dispatch => {
  dispatch({ type: GETTING_STYLISTS_CHECK });
  axios
    .get(URL)
    .then(res => {
      dispatch({ type: GETTING_STYLISTS_CHECK_COMPLETE, payload: res.data });
    })
    .catch(err =>
      dispatch({ type: GETTING_STYLISTS_CHECK_ERROR, payload: err })
    );
};
