import { Link } from "react-router-dom";

import "../../assets/css/styles.css";
import IconWhisk from "../../assets/images/whisk.svg";
import IconTime from "../../assets/images/time.svg";
import IconSalty from "../../assets/images/broccoli.svg";
import IconSweet from "../../assets/images/strawberry.svg";

function HomepageRecipeCard({ recipes }) {
	return (
		<div>
			{recipes &&
				recipes.map((recipe) => (
					<Link
						to={{ pathname: `/recipe/${recipe.id_recipe}` }}
						key={recipe.id_recipe}
					>
						<div className="recipe-card">
							<img
								className="recipe-card-img"
								src={recipe.picture}
								alt={recipe.title}
							/>
							<div className="recipe-card-text">
								<h3>{recipe.title}</h3>
								<p>
									ajoutée le {recipe.date} par {recipe.name}
								</p>
								<div className="recipe-card-legend">
									<div className="recipe-card-legend-item">
										<img src={IconTime} alt="durée" />
										<p>{recipe.duration} min</p>
									</div>
									<div className="recipe-card-legend-item">
										<img src={IconWhisk} alt="difficulté" />
										<p>{recipe.level}</p>
									</div>
									<div className="recipe-card-legend-item">
										<img
											src={recipe.taste === "salé" ? IconSalty : IconSweet}
											alt="goût"
										/>
										<p>{recipe.taste}</p>
									</div>
								</div>
							</div>
						</div>
					</Link>
				))}
		</div>
	);
}

export default HomepageRecipeCard;
