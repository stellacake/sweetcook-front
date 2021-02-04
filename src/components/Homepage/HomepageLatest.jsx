import React, { useState, useEffect } from "react";
import axios from "axios";

import HomepageRecipeCard from "./HomepageRecipeCard";

import "../../assets/css/styles.css";

function HomepageLatest() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}recipes/latest`)
			.then((response) => response.data)
			.then((data) => setRecipes(data));
	}, []);
	return (
		<div className="latest">
			<h2>Dernières recettes</h2>
			{recipes.map((recipe) => (
				<HomepageRecipeCard
					key={recipe.id_recipe}
					id_recipe={recipe.id_recipe}
					picture={recipe.picture}
					title={recipe.title}
					name={recipe.name}
					date={recipe.date}
					duration={recipe.duration}
					level={recipe.level}
					taste={recipe.taste}
				/>
			))}
		</div>
	);
}

export default HomepageLatest;
