import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUserAccess } from "./redux";

import PrivateRoute from "./components/globals/PrivateRoute";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";

import "./assets/css/styles.css";

function App({ user, handleUserAccess }) {
	useEffect(() => {
		if (user.token.length !== 0) {
			handleUserAccess(user.token);
		}
	}, [user.token, handleUserAccess]);

	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/login" component={Login} />
				<PrivateRoute component={PrivateRoute} />
			</Switch>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleUserAccess: (token) => dispatch(fetchUserAccess(token)),
	};
};

App.propTypes = {
	handleUserAccess: PropTypes.func.isRequired,
	user: PropTypes.shape({
		token: PropTypes.string.isRequired,
	}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
