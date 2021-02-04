import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoute({ user, component: Component, ...rest }) {
	const isPrivateRoute =
		rest.location.pathname.split("/").includes("admin") ||
		rest.location.pathname.split("/").includes("users");

	if (user.isAuthenticated && isPrivateRoute) {
		return <Route {...rest} render={(props) => <Component {...props} />} />;
	}
	return (
		<Redirect
			to={{
				pathname: isPrivateRoute ? "/login" : rest.location.pathname,
				state: { from: rest.location },
			}}
		/>
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
