import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/css/styles.css";
import { useHistory } from "react-router-dom";

function EditForm({ recipeId }) {
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

	const [formMessage, setFormMessage] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const handleChange = (e) => {
		setRecipe({
			...recipe,
			[e.target.name]: e.target.value,
		});
	};

	const history = useHistory();

	const handleErrorMessage = () => {
		setFormMessage(
			`Erreur lors de la modification de la recette, veuillez réessayer ultérieurement.`
		);
	};

	const closeModal = () => {
		setModalOpen(false);
		history.push("/private/personal");
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}recipes/${recipeId}`)
			.then((response) => response.data)
			.then((data) => {
				setRecipe(data[0]);
			});
	}, [recipeId]);

	const createRecipe = (e) => {
		e.preventDefault();
		axios
			.put(`${process.env.REACT_APP_API}recipes/${recipeId}`, {
				title: recipe.title,
				quantity: recipe.quantity,
				picture: recipe.picture,
				duration: recipe.duration,
				level_id: recipe.level_id,
				taste_id: recipe.taste_id,
				ingredient_1: recipe.ingredient_1,
				ingredient_2: recipe.ingredient_2,
				ingredient_3: recipe.ingredient_3,
				ingredient_4: recipe.ingredient_4,
				ingredient_5: recipe.ingredient_5,
				ingredient_6: recipe.ingredient_6,
				ingredient_7: recipe.ingredient_7,
				ingredient_8: recipe.ingredient_8,
				ingredient_9: recipe.ingredient_9,
				ingredient_10: recipe.ingredient_10,
				step_1: recipe.step_1,
				step_2: recipe.step_2,
				step_3: recipe.step_3,
				step_4: recipe.step_4,
				step_5: recipe.step_5,
				step_6: recipe.step_6,
				step_7: recipe.step_7,
				step_8: recipe.step_8,
				step_9: recipe.step_9,
				step_10: recipe.step_10,
			})
			.then(
				() => setFormMessage(`Votre recette a bien été modifiée !`),
				setModalOpen(true)
			)
			.catch((err) => {
				handleErrorMessage(err);
				setModalOpen(true);
			});
	};

	return (
		<div className="overflow">
			<h2>Modifier la recette</h2>
			<form onSubmit={createRecipe}>
				<div className="add-recipe-form">
					<div className="form-block">
						<label htmlFor="duration">
							Titre de la recette
							<input
								id="title"
								name="title"
								type="text"
								value={recipe.title}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="quantity">
							Quantité (nb de personnes ou parts)
							<input
								id="quantity"
								name="quantity"
								type="text"
								value={recipe.quantity}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="picture">
							Photo
							<input
								id="picture"
								name="picture"
								type="url"
								value={recipe.picture}
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
								value={recipe.duration}
								onChange={handleChange}
							/>
						</label>
						<label htmlFor="level_id">
							Sélection de la difficulté
							<select
								id="level_id"
								name="level_id"
								type="text"
								value={recipe.level}
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
								value={recipe.taste}
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
							Ingrédients
							<input
								id="ingredient_1"
								name="ingredient_1"
								type="text"
								value={recipe.ingredient_1}
								onChange={handleChange}
							/>
							<input
								id="ingredient_2"
								name="ingredient_2"
								type="text"
								value={recipe.ingredient_2}
								onChange={handleChange}
							/>
							<input
								id="ingredient_3"
								name="ingredient_3"
								type="text"
								value={recipe.ingredient_3}
								onChange={handleChange}
							/>
							<input
								id="ingredient_4"
								name="ingredient_4"
								type="text"
								value={recipe.ingredient_4}
								onChange={handleChange}
							/>
							<input
								id="ingredient_5"
								name="ingredient_5"
								type="text"
								value={recipe.ingredient_5}
								onChange={handleChange}
							/>
							<input
								id="ingredient_6"
								name="ingredient_6"
								type="text"
								value={recipe.ingredient_6}
								onChange={handleChange}
							/>
							<input
								id="ingredient_7"
								name="ingredient_7"
								type="text"
								value={recipe.ingredient_7}
								onChange={handleChange}
							/>
							<input
								id="ingredient_8"
								name="ingredient_8"
								type="text"
								value={recipe.ingredient_8}
								onChange={handleChange}
							/>
							<input
								id="ingredient_9"
								name="ingredient_9"
								type="text"
								value={recipe.ingredient_9}
								onChange={handleChange}
							/>
							<input
								id="ingredient_10"
								name="ingredient_10"
								type="text"
								value={recipe.ingredient_10}
								onChange={handleChange}
							/>
						</label>
					</div>
					<div className="form-block">
						<label htmlFor="steps">
							Instructions
							<input
								id="step_1"
								name="step_1"
								type="text"
								value={recipe.step_1}
								onChange={handleChange}
							/>
							<input
								id="step_2"
								name="step_2"
								type="text"
								value={recipe.step_2}
								onChange={handleChange}
							/>
							<input
								id="step_3"
								name="step_3"
								type="text"
								value={recipe.step_3}
								onChange={handleChange}
							/>
							<input
								id="step_4"
								name="step_4"
								type="text"
								value={recipe.step_4}
								onChange={handleChange}
							/>
							<input
								id="step_5"
								name="step_5"
								type="text"
								value={recipe.step_5}
								onChange={handleChange}
							/>
							<input
								id="step_6"
								name="step_6"
								type="text"
								value={recipe.step_6}
								onChange={handleChange}
							/>
							<input
								id="step_7"
								name="step_7"
								type="text"
								value={recipe.step_7}
								onChange={handleChange}
							/>
							<input
								id="step_8"
								name="step_8"
								type="text"
								value={recipe.step_8}
								onChange={handleChange}
							/>
							<input
								id="step_9"
								name="step_9"
								type="text"
								value={recipe.step_9}
								onChange={handleChange}
							/>
							<input
								id="step_10"
								name="step_10"
								type="text"
								value={recipe.step_10}
								onChange={handleChange}
							/>
						</label>
					</div>
				</div>
				<button type="submit">Modifier !</button>
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

export default EditForm;
