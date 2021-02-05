import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUserAccess } from "./redux";

import PrivateRoute from "./components/globals/PrivateRoute";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import PersonalSpace from "./components/PersonalSpace/PersonalSpace";

import "./assets/css/styles.css";

function App({ user, handleUserAccess }) {
	useEffect(() => {
		if (user.token.length !== 0) {
			handleUserAccess(user.token);
		}
	}, [user.token]);

	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Login} />
				<PrivateRoute exact path="/private" component={Homepage} />
				<PrivateRoute exact path="/private/add-recipe" component={AddRecipe} />
				<PrivateRoute
					exact
					path="/private/recipe/:idRecipe"
					component={RecipeDetails}
				/>
				<PrivateRoute
					exact
					path="/private/personal"
					component={PersonalSpace}
				/>
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
