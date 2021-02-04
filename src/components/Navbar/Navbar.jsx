import { Link } from "react-router-dom";

import "../../assets/css/styles.css";
import IconHomepage from "../../assets/images/home.svg";
import IconUser from "../../assets/images/user.svg";
import IconAdd from "../../assets/images/plus.svg";
import IconLogout from "../../assets/images/logout.svg";

function Navbar() {
	const handleClick = () => {
		localStorage.clear();
		window.location.href = "/login";
	};
	return (
		<div className="navbar">
			<Link to={{ pathname: `/` }}>
				<img src={IconHomepage} alt="homepage" />
			</Link>
			<Link to={{ pathname: `/personal` }}>
				<img src={IconUser} alt="recettes perso" />
			</Link>
			<Link to={{ pathname: `/add-recipe` }}>
				<img src={IconAdd} alt="ajouter une recette" />
			</Link>

			<img src={IconLogout} alt="ajouter une recette" onClick={handleClick} />
		</div>
	);
}

export default Navbar;
