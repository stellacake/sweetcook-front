import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import HomepageRecipeCard from "../Homepage/HomepageRecipeCard";
import EditForm from "../globals/EditForm";
import DeleteForm from "../globals/DeleteForm";

import "../../assets/css/styles.css";
import IconAdd from "../../assets/images/plus.svg";
import IconEdit from "../../assets/images/edit.svg";
import IconDelete from "../../assets/images/trash.svg";
import IconBack from "../../assets/images/previous.svg";

function PersonalSpace() {
	const [recipes, setRecipes] = useState([]);
	const [editModal, setEditModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [recipeId, setRecipeId] = useState("");
	const [recipeTitle, setRecipeTitle] = useState("");

	const handleEdit = (id) => {
		setEditModal(!editModal);
		setRecipeId(id);
	};

	const handleDelete = ({ title, id }) => {
		setDeleteModal(!deleteModal);
		setRecipeTitle(title);
		setRecipeId(id);
	};

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}recipes/`)
			.then((response) => response.data)
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className="personal-space">
			<h1>Liste des recettes</h1>
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
								<img
									onClick={() => handleDelete(recipe.title, recipe.id_recipe)}
									src={IconDelete}
									alt="Supprimer"
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
					<EditForm recipeId={recipeId} />
				</div>
			)}
			{deleteModal && (
				<DeleteForm
					recipeId={recipeId}
					recipeTitle={recipeTitle}
					setDeleteModal={setDeleteModal}
					deleteModal={deleteModal}
				/>
			)}
		</div>
	);
}

export default PersonalSpace;
