import HomepageRecipeCard from "./HomepageRecipeCard";

import "../../assets/css/styles.css";

function HomepageRecipeList({ recipes }) {
	return <HomepageRecipeCard recipes={recipes} />;
}

export default HomepageRecipeList;
