import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Homepage from "../Homepage/Homepage";
import AddRecipe from "../AddRecipe/AddRecipe";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import PersonalSpace from "../PersonalSpace/PersonalSpace";

function PrivateRoute({ user, component: Component, ...rest }) {
	const isPrivateRoute = rest.location.pathname.split("/").includes("private");

	if (user.isAuthenticated && isPrivateRoute) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	}
	return (
		<>
			<Redirect
				to={{
					pathname: isPrivateRoute ? "/login" : rest.location.pathname,
					state: { from: rest.location },
				}}
			/>
			<Switch>
				<Route exact path="/private" component={Homepage} />
				<Route exact path="/private/add-recipe" component={AddRecipe} />
				<Route
					exact
					path="/private/recipe/:idRecipe"
					component={RecipeDetails}
				/>
				<Route exact path="/private/personal" component={PersonalSpace} />
			</Switch>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(PrivateRoute);

PrivateRoute.propTypes = {
	user: PropTypes.shape({
		token: PropTypes.string,
		isAuthenticated: PropTypes.bool,
	}).isRequired,
};
