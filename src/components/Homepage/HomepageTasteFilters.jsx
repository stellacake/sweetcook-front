import "../../assets/css/styles.css";

function HomepageTasteFilters({ tastes, handleTaste }) {
	return (
		<div>
			<h2>Plutôt sucré ou salé&nbsp;?</h2>
			<div className="taste-filters">
				{tastes &&
					tastes.map((taste) => (
						<div
							key={taste.id}
							className="taste-button"
							onClick={() => handleTaste(taste.name)}
						>
							<img src={taste.picture} alt={taste.name} />
							<p>{taste.name}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default HomepageTasteFilters;
