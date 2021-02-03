import "../../assets/css/styles.css";
import IconHomepage from "../../assets/images/home.svg";
import IconSalty from "../../assets/images/broccoli.svg";
import IconSweet from "../../assets/images/strawberry.svg";
import IconUser from "../../assets/images/user.svg";
import IconAdd from "../../assets/images/plus.svg";

function Navbar() {
	return (
		<div className="navbar">
			<img src={IconHomepage} alt="homepage" />
			<img src={IconSweet} alt="recettes sucrées" />
			<img src={IconSalty} alt="recettes salées" />
			<img src={IconUser} alt="recettes perso" />
			<img src={IconAdd} alt="ajouter une recette" />
		</div>
	);
}

export default Navbar;
