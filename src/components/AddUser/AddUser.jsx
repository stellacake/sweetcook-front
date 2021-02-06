import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "../../assets/css/styles.css";

function AddUser() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		admin: 0,
	});

	const [formMessage, setFormMessage] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const history = useHistory();

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
		history.push("/private/add-user");
	};

	const createUser = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}/users`, { ...user })
			.then(() => setFormMessage(`Bien ouej !`), setModalOpen(true))
			.catch((err) => {
				handleErrorMessage(err);
				setModalOpen(true);
			});
	};

	return (
		<div className="add-recipe">
			<h1>Ajouter un utilisateur</h1>
			<form onSubmit={createUser}>
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
							<input
								id="password"
								name="password"
								type="password"
								onChange={handleChange}
							/>
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
								<option value=""> </option>
								<option value="0">utilisateur</option>
								<option value="1">admin</option>
							</select>
						</label>
					</div>
				</div>
				<button type="submit">Ajouter !</button>
			</form>
			{modalOpen && (
				<div>
					<div className="experiment-start-modal-open" />
					<div className="modal-text">
						<p>{formMessage}</p>
						<button onClick={closeModal} type="button">
							OK
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default AddUser;
