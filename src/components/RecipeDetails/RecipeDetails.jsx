import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/css/styles.css";
import IconWhisk from "../../assets/images/whisk.svg";
import IconTime from "../../assets/images/time.svg";
import IconSalty from "../../assets/images/broccoli.svg";
import IconSweet from "../../assets/images/strawberry.svg";

function RecipeDetails({ match }) {
	const { idRecipe } = match.params;
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}recipes/${idRecipe}`)
			.then((response) => response.data)
			.then((data) => setRecipe(data[0]));
	}, []);

	return (
		<div className="recipe-details">
			<h1>{recipe.title}</h1>
			<h4>{recipe.quantity}</h4>
			<img
				className="recipe-details-img"
				src={recipe.picture}
				alt={recipe.title}
			/>
			<p>
				recette ajoutée le {recipe.date} par {recipe.name}
			</p>
			<div className="recipe-card-legend">
				<div className="recipe-card-legend-item">
					<img src={IconTime} alt="durée" />
					<p>durée : {recipe.duration} min</p>
				</div>
				<div className="recipe-card-legend-item">
					<img src={IconWhisk} alt="difficulté" />
					<p>difficulté : {recipe.level}</p>
				</div>
				<div className="recipe-card-legend-item">
					<img
						src={recipe.taste === "salé" ? IconSalty : IconSweet}
						alt="goût"
					/>
					<p>goût : {recipe.taste}</p>
				</div>
			</div>
			<div className="recipe-instructions">
				<div className="recipe-ingredients">
					<h2>Ingrédients</h2>
					<ul>
						{recipe.ingredient_1 && <li>{recipe.ingredient_1}</li>}
						{recipe.ingredient_2 && <li>{recipe.ingredient_2}</li>}
						{recipe.ingredient_3 && <li>{recipe.ingredient_3}</li>}
						{recipe.ingredient_4 && <li>{recipe.ingredient_4}</li>}
						{recipe.ingredient_5 && <li>{recipe.ingredient_5}</li>}
						{recipe.ingredient_6 && <li>{recipe.ingredient_6}</li>}
						{recipe.ingredient_7 && <li>{recipe.ingredient_7}</li>}
						{recipe.ingredient_8 && <li>{recipe.ingredient_8}</li>}
						{recipe.ingredient_9 && <li>{recipe.ingredient_9}</li>}
						{recipe.ingredient_10 && <li>{recipe.ingredient_10}</li>}
					</ul>
				</div>
				<div className="recipe-steps">
					<h2>&Eacute;tapes</h2>
					<ol>
						{recipe.step_1 && <li>{recipe.step_1}</li>}
						{recipe.step_2 && <li>{recipe.step_2}</li>}
						{recipe.step_3 && <li>{recipe.step_3}</li>}
						{recipe.step_4 && <li>{recipe.step_4}</li>}
						{recipe.step_5 && <li>{recipe.step_5}</li>}
						{recipe.step_6 && <li>{recipe.step_6}</li>}
						{recipe.step_7 && <li>{recipe.step_7}</li>}
						{recipe.step_8 && <li>{recipe.step_8}</li>}
						{recipe.step_9 && <li>{recipe.step_9}</li>}
						{recipe.step_10 && <li>{recipe.step_10}</li>}
					</ol>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
