import HomepageRecipeCard from "./HomepageRecipeCard";

import "../../assets/css/styles.css";

function HomepageRecipeList({ recipes }) {
	return (
		<div className="list">
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

export default HomepageRecipeList;
