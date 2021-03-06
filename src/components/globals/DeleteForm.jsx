import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../assets/css/styles.css";

function DeleteForm({ recipeId, recipeTitle, setDeleteModal, deleteModal }) {
	const [formMessage, setFormMessage] = useState("");
	const [modalOpen, setModalOpen] = useState(false);

	const history = useHistory();

	const handleErrorMessage = () => {
		setFormMessage(
			`Erreur lors de la suppression de la recette, veuillez réessayer ultérieurement.`
		);
	};

	const closeModal = () => {
		setModalOpen(false);
		history.push("/private/personal");
	};

	const handleDelete = () => {
		axios
			.delete(`${process.env.REACT_APP_API}recipes/${recipeId}`)
			.then(setFormMessage(`Votre recette a bien été supprimée !`))
			.catch((err) => {
				handleErrorMessage(err);
			});
		setModalOpen(true);
	};

	return (
		<div className="personal-space-modal-open">
			<h2>Êtes-vous sûr(e) de vouloir supprimer "{recipeTitle}" ?</h2>
			<div className="personal-space-buttons">
				<button onClick={() => setDeleteModal(!deleteModal)}>Annuler</button>
				<button onClick={() => handleDelete}>Confirmer</button>
			</div>
			{modalOpen && (
				<div>
					<p>{formMessage}</p>
					<button onClick={closeModal} type="button">
						OK
					</button>
				</div>
			)}
		</div>
	);
}

export default DeleteForm;
