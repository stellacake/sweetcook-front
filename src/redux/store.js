import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	user: userReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
