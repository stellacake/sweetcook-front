import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import HomepageRecipeCard from "../Homepage/HomepageRecipeCard";
import EditForm from "../globals/EditForm";

import "../../assets/css/styles.css";
import IconAdd from "../../assets/images/plus.svg";
import IconEdit from "../../assets/images/edit.svg";

import IconBack from "../../assets/images/previous.svg";

function PersonalSpace({ user }) {
	const [recipes, setRecipes] = useState([]);
	const [editModal, setEditModal] = useState(false);
	const [recipeId, setRecipeId] = useState("");

	const handleEdit = (id) => {
		setEditModal(!editModal);
		setRecipeId(id);
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}users/${user.profile.id}/recipes/`)
			.then((response) => response.data)
			.then((data) => setRecipes(data));
	}, [user.profile]);

	return (
		<div className="personal-space">
			<h1>Mes recettes</h1>
			<Link to={{ pathname: `/private/add-recipe` }}>
				<img
					className="personal-space-img"
					src={IconAdd}
					alt="ajouter une recette"
				/>
			</Link>
			<div className="personal-space-list">
				{recipes &&
					recipes.map((recipe) => (
						<div className="personal-space-card" key={recipe.id_recipe}>
							<HomepageRecipeCard
								id_recipe={recipe.id_recipe}
								picture={recipe.picture}
								title={recipe.title}
								name={recipe.name}
								date={recipe.date}
								duration={recipe.duration}
								level={recipe.level}
								taste={recipe.taste}
							/>
							<div className="personal-space-actions">
								<img
									onClick={() => handleEdit(recipe.id_recipe)}
									src={IconEdit}
									alt="Modifier"
								/>
							</div>
						</div>
					))}
			</div>
			{editModal && (
				<div className="personal-space-modal-open">
					<img
						onClick={() => setEditModal(!editModal)}
						src={IconBack}
						alt="fermer"
					/>
					<EditForm
						recipeId={recipeId}
						setEditModal={setEditModal}
						editModal={editModal}
					/>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

export default connect(mapStateToProps)(PersonalSpace);
