import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import HomepageBrand from "../Homepage/HomepageBrand";

import {
	fetchUserTokenSuccess,
	fetchUserTokenFailure,
} from "../../redux/index";

import "../../assets/css/styles.css";
import Show from "../../assets/images/visible.svg";
import Hide from "../../assets/images/invisible.svg";

function Login({
	handleUserTokenSuccess,
	handleUserTokenError,
	user,
	location,
}) {
	const [verificationData, setVerificationData] = useState({
		name: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setVerificationData({
			...verificationData,
			[e.target.name]: e.target.value,
		});
	};

	const handleErrorForm = () => {
		handleUserTokenError("Identifiants incorrects");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}users/login`, verificationData)
			.then((response) => {
				handleUserTokenSuccess(response.data);
				localStorage.setItem("authToken", response.data);
			})
			.catch((err) => {
				handleErrorForm(err);
			});
	};

	if (user.isAuthenticated) {
		const { from } = location.state || {
			from: {
				pathname: "/private",
			},
		};
		return <Redirect to={from} />;
	}
	return (
		<div className="login-page">
			<HomepageBrand />
			<form className="login-form" onSubmit={handleSubmit}>
				<input
					type="name"
					name="name"
					placeholder="Prénom"
					className="login-input"
					onChange={handleChange}
				/>
				<div className="pw-input">
					<input
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="Mot de passe"
						className="login-input"
						onChange={handleChange}
					/>
					<button
						type="button"
						className="pw-button"
						onClick={() => setShowPassword(!showPassword)}
					>
						<img
							src={showPassword ? Hide : Show}
							alt={showPassword ? "Show password" : "Hide password"}
						/>
					</button>
				</div>
				<div>
					<button type="submit">Connexion</button>
				</div>
				<p>{user.error}</p>
			</form>
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
		handleUserTokenSuccess: (studentToken) =>
			dispatch(fetchUserTokenSuccess(studentToken)),
		handleUserTokenError: (errorMsg) =>
			dispatch(fetchUserTokenFailure(errorMsg)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
	user: PropTypes.shape({
		isAuthenticated: PropTypes.bool.isRequired,
		error: PropTypes.string.isRequired,
	}).isRequired,
	location: PropTypes.shape({
		state: PropTypes.shape.isRequired,
	}).isRequired,
	handleUserTokenError: PropTypes.func.isRequired,
	handleUserTokenSuccess: PropTypes.func.isRequired,
};
