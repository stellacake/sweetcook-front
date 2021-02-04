import { Link } from "react-router-dom";

import "../../assets/css/styles.css";
import IconHomepage from "../../assets/images/home.svg";
import IconUser from "../../assets/images/user.svg";
import IconAdd from "../../assets/images/plus.svg";

function Navbar() {
	return (
		<div className="navbar">
			<Link to={{ pathname: `/` }}>
				<img src={IconHomepage} alt="homepage" />
			</Link>
			<Link to={{ pathname: `/` }}>
				<img src={IconUser} alt="recettes perso" />
			</Link>
			<Link to={{ pathname: `/add-recipe` }}>
				<img src={IconAdd} alt="ajouter une recette" />
			</Link>
		</div>
	);
}

export default Navbar;
