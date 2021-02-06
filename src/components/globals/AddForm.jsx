import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import "../../assets/css/styles.css";

function AddForm({ user }) {
	const [users, setUsers] = useState([]);
	const [recipe, setRecipe] = useState({
		title: "",
		quantity: "",
		picture: "",
		duration: "",
		level_id: "",
		taste_id: "",
		ingredient_1: "",
		ingredient_2: "",
		ingredient_3: "",
		ingredient_4: "",
		ingredient_5: "",
		ingredient_6: "",
		ingredient_7: "",
		ingredient_8: "",
		ingredient_9: "",
		ingredient_10: "",
		step_1: "",
		step_2: "",
		step_3: "",
		step_4: "",
		step_5: "",
		step_6: "",
		step_7: "",
		step_8: "",
		step_9: "",
		step_10: "",
	});

	const [userRecipe, setUserRecipe] = useState("");
	const [formMessage, setFormMessage] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const getDate = () => {
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, "0");
		let mm = String(today.getMonth() + 1).padStart(2, "0");
		let yyyy = today.getFullYear();
		return yyyy + "-" + mm + "-" + dd;
	};
	const history = useHistory();

	const handleChange = (e) => {
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value,
		});
	};

	const handleErrorMessage = () => {
		setFormMessage(
			`Erreur lors de l'ajout de la recette, veuillez réessayer ultérieurement.`
		);
	};

	const closeModal = () => {
		setModalOpen(false);
		history.push("/private/personal");
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}users`)
			.then((response) => response.data)
			.then((data) => {
				setUsers(data);
			});
	}, []);

	const createRecipe = (e) => {
		e.preventDefault();
		axios
			.post(`${process.env.REACT_APP_API}/recipes`, { ...recipe })
			.then((res) => res.data)
			.then((data) => {
				axios
					.post(`${process.env.REACT_APP_API}/users/recipes`, {
						user_id: Number(userRecipe),
						recipe_id: data.id,
						date: getDate(),
					})
					.then(
						() => setFormMessage(`Votre recette a bien été ajoutée !`),
						setModalOpen(true)
					);
			})
			.catch((err) => {
				handleErrorMessage(err);
				setModalOpen(true);
			});
	};

	return (
		<>
			<form onSubmit={createRecipe}>
				<div className="add-recipe-form">
					<div className="form-block">
						{user.profile.admin === 1 && (
							<label htmlFor="name">
								Sélection du nom
								<select
									id="name"
									name="name"
									type="text"
									onChange={(e) => setUserRecipe(e.target.value)}
								>
									<option value=""> </option>
									{users &&
										users.map((user) => (
											<option key={user.id} value={user.id}>
												{user.name}
											</option>
										))}
								</select>
							</label>
						)}
						<label htmlFor="duration">
							Titre de la recette
							<input
								id="title"
								name="title"
								type="text"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="quantity">
							Quantité (nb de personnes ou parts)
							<input
								id="quantity"
								name="quantity"
								type="text"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="picture">
							Photo
							<input
								id="picture"
								name="picture"
								type="url"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="duration">
							Durée (en minutes)
							<input
								type="number"
								id="duration"
								name="duration"
								min="5"
								max="180"
								step="5"
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="level_id">
							Sélection de la difficulté
							<select
								id="level_id"
								name="level_id"
								type="text"
								onChange={handleChange}
							>
								<option value=""> </option>
								<option value="1">easy</option>
								<option value="2">challenging</option>
								<option value="3">hard</option>
							</select>
						</label>
						<label htmlFor="taste_id">
							Sélection du goût
							<select
								id="taste_id"
								name="taste_id"
								type="text"
								placeholder="goût"
								onChange={handleChange}
							>
								<option value=""> </option>
								<option value="1">sucré</option>
								<option value="2">salé</option>
							</select>
						</label>
					</div>
					<div className="form-block">
						<label htmlFor="ingredients">
							Ajouter des ingrédients
							{number.map((item, index) => (
								<input
									key={index}
									id={`ingredient_${item}`}
									name={`ingredient_${item}`}
									type="text"
									onChange={handleChange}
								/>
							))}
						</label>
					</div>
					<div className="form-block">
						<label htmlFor="steps">
							Ajouter des instructions
							{number.map((item, index) => (
								<input
									key={index}
									id={`step_${item}`}
									name={`step_${item}`}
									type="text"
									onChange={handleChange}
								/>
							))}
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
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(AddForm);
