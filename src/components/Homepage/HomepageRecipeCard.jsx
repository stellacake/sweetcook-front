import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../assets/css/styles.css";
import IconWhisk from "../../assets/images/whisk.svg";
import IconTime from "../../assets/images/time.svg";
import IconSalty from "../../assets/images/broccoli.svg";
import IconSweet from "../../assets/images/strawberry.svg";

function HomepageRecipeCard({
	id_recipe,
	picture,
	title,
	name,
	date,
	duration,
	level,
	taste,
}) {
	return (
		<Link to={{ pathname: `/private/recipe/${id_recipe}` }} key={id_recipe}>
			<div className="recipe-card">
				<img className="recipe-card-img" src={picture} alt={title} />
				<div className="recipe-card-text">
					<h3>{title}</h3>
					<p>
						ajoutée le {date} par {name}
					</p>
					<div className="recipe-card-legend">
						<div className="recipe-card-legend-item">
							<img src={IconTime} alt="durée" />
							<p>{duration} min</p>
						</div>
						<div className="recipe-card-legend-item">
							<img src={IconWhisk} alt="difficulté" />
							<p>{level}</p>
						</div>
						<div className="recipe-card-legend-item">
							<img src={taste === "salé" ? IconSalty : IconSweet} alt="goût" />
							<p>{taste}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default HomepageRecipeCard;

HomepageRecipeCard.propTypes = {
	id_recipe: PropTypes.number.isRequired,
	picture: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
	level: PropTypes.string.isRequired,
	taste: PropTypes.string.isRequired,
};
