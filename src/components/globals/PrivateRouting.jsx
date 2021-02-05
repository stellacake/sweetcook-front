import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../Homepage/Homepage";
import AddRecipe from "../AddRecipe/AddRecipe";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import PersonalSpace from "../PersonalSpace/PersonalSpace";

const PrivateRouting = () => {
	return (
		<Switch>
			<Route exact path="/private" component={Homepage} />
			<Route exact path="/private/add-recipe" component={AddRecipe} />
			<Route exact path="/private/recipe/:idRecipe" component={RecipeDetails} />
			<Route exact path="/private/personal" component={PersonalSpace} />
		</Switch>
	);
};

export default PrivateRouting;
