import React, { useState, useEffect } from "react";
import axios from "axios";

import HomepageBrand from "./HomepageBrand";
import HomepageLatest from "./HomepageLatest";
import HomepageTasteFilters from "./HomepageTasteFilters";
import HomepageRecipeList from "./HomepageRecipeList";

import "../../assets/css/styles.css";

function Homepage() {
	const [tastes, setTastes] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [filtering, setFiltering] = useState(false);

	const handleTaste = (tasteName) => {
		setFiltering(!filtering);
		setFilteredRecipes(recipes.filter((recipe) => recipe.taste === tasteName));
		console.log(filteredRecipes);
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}tastes/`)
			.then((response) => response.data)
			.then((data) => setTastes(data));
		axios
			.get(`${process.env.REACT_APP_API}recipes/`)
			.then((response) => response.data)
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className="homepage">
			<HomepageBrand />
			<HomepageLatest />
			<HomepageTasteFilters tastes={tastes} handleTaste={handleTaste} />
			{filtering && recipes && <HomepageRecipeList recipes={filteredRecipes} />}
			{!filtering && recipes && <HomepageRecipeList recipes={recipes} />}
		</div>
	);
}

export default Homepage;
