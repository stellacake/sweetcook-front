import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../assets/css/styles.css";
import IconHomepage from "../../assets/images/home.svg";
import IconUser from "../../assets/images/user.svg";
import IconAddR from "../../assets/images/plus.svg";
import IconAddU from "../../assets/images/add-friend.svg";
import IconLogout from "../../assets/images/logout.svg";

function Navbar({ user }) {
	const handleClick = () => {
		localStorage.clear();
		window.location.href = "/";
	};
	return (
		<div className="navbar">
			<Link to={{ pathname: `/private` }}>
				<img src={IconHomepage} alt="homepage" />
			</Link>
			<Link to={{ pathname: `/private/personal` }}>
				<img src={IconUser} alt="recettes perso" />
			</Link>
			<Link to={{ pathname: `/private/add-recipe` }}>
				<img src={IconAddR} alt="ajouter une recette" />
			</Link>
			{user.profile.admin === 1 && (
				<Link to={{ pathname: `/private/add-user` }}>
					<img src={IconAddU} alt="ajouter un utilisateur" />
				</Link>
			)}

			<img src={IconLogout} alt="ajouter une recette" onClick={handleClick} />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(Navbar);
