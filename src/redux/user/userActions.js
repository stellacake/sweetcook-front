import axios from "axios";
import {
	FETCH_USER_TOKEN_REQUEST,
	FETCH_USER_TOKEN_FAILURE,
	FETCH_USER_TOKEN_SUCCESS,
	FETCH_USER_ACCESS_REQUEST,
	FETCH_USER_ACCESS_SUCCESS,
	FETCH_USER_ACCESS_FAILURE,
	// USER_STATUS_CHANGED,
} from "./userTypes";

export const fetchUserTokenRequest = () => {
	return {
		type: FETCH_USER_TOKEN_REQUEST,
	};
};

export const fetchUserTokenSuccess = (token) => {
	return {
		type: FETCH_USER_TOKEN_SUCCESS,
		payload: token,
	};
};

export const fetchUserTokenFailure = (error) => {
	return {
		type: FETCH_USER_TOKEN_FAILURE,
		payload: error,
	};
};

export const fetchUserToken = () => {
	return (dispatch) => {
		dispatch(fetchUserTokenRequest());
	};
};

export const fetchUserAccessRequest = () => {
	return {
		type: FETCH_USER_ACCESS_REQUEST,
	};
};

export const fetchUserAccessSuccess = (profile) => {
	return {
		type: FETCH_USER_ACCESS_SUCCESS,
		payload: profile,
	};
};

export const fetchUserAccessFailure = () => {
	return {
		type: FETCH_USER_ACCESS_FAILURE,
	};
};

export const fetchUserAccess = (token, status) => {
	return (dispatch) => {
		dispatch(fetchUserAccessRequest());
		axios
			.post(
				`${process.env.REACT_APP_API}/profile`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				dispatch(fetchUserAccessSuccess(res.data.results.formData));
			})
			.catch(() => {
				dispatch(fetchUserAccessFailure());
			});
	};
};

// export const changeUserStatus = (status) => {
// 	return {
// 		type: USER_STATUS_CHANGED,
// 		payload: status,
// 	};
// };
