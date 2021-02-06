import React, { useState } from "react";
import axios from "axios";

import "../../assets/css/styles.css";
import Show from "../../assets/images/visible.svg";
import Hide from "../../assets/images/invisible.svg";

function AddUser() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		admin: 0,
	});

	const [formMessage, setFormMessage] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleErrorMessage = () => {
		setFormMessage(`Erreur lors de l'ajout, réessayer ultérieurement.`);
	};

	const closeModal = () => {
		setModalOpen(false);
		var form = document.getElementsByName("userform")[0];
		form.reset();
		return false;
	};

	const createUser = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}/users`, { ...user })
			.then(() => setFormMessage(`Utilisateur ajouté !`), setModalOpen(true))
			.catch((err) => {
				handleErrorMessage(err);
				setModalOpen(true);
			});
	};

	return (
		<div className="add-recipe">
			<h1>Ajouter un utilisateur</h1>
			<form name="userform" onSubmit={createUser}>
				<div className="add-recipe-form">
					<div className="form-block">
						<label htmlFor="name">
							Prénom
							<input
								id="name"
								name="name"
								type="text"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="email">
							E-mail
							<input
								id="email"
								name="email"
								type="text"
								onChange={handleChange}
							/>
						</label>

						<label htmlFor="password">
							Mot de passe
							<div className="pw-input">
								<input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
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
						</label>

						<label htmlFor="admin">
							Sélection du rôle
							<select
								id="admin"
								name="admin"
								type="text"
								placeholder="rôle"
								onChange={handleChange}
							>
								<option value="0">utilisateur</option>
								<option value="1">admin</option>
							</select>
						</label>
					</div>
				</div>
				<button type="submit">Ajouter !</button>
			</form>
			{modalOpen && (
				<div className="personal-space-modal-open">
					<p>{formMessage}</p>
					<button onClick={closeModal} type="button">
						OK
					</button>
				</div>
			)}
		</div>
	);
}

export default AddUser;
