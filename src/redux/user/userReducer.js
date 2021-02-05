import {
	FETCH_USER_TOKEN_REQUEST,
	FETCH_USER_TOKEN_FAILURE,
	FETCH_USER_TOKEN_SUCCESS,
	FETCH_USER_ACCESS_REQUEST,
	FETCH_USER_ACCESS_SUCCESS,
	FETCH_USER_ACCESS_FAILURE,
} from "./userTypes";

const initialState = {
	load: true,
	token: localStorage.getItem("authToken") || "",
	error: "",
	isAuthenticated: false,
	profile: {},
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_TOKEN_REQUEST:
			return {
				...state,
				load: true,
			};
		case FETCH_USER_TOKEN_FAILURE:
			return {
				...state,
				load: false,
				error: action.payload,
			};
		case FETCH_USER_TOKEN_SUCCESS:
			return {
				...state,
				load: false,
				token: action.payload,
			};
		case FETCH_USER_ACCESS_REQUEST:
			return {
				...state,
				load: true,
			};
		case FETCH_USER_ACCESS_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				profile: action.payload,
			};
		case FETCH_USER_ACCESS_FAILURE:
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			return state;
	}
};

export default userReducer;
