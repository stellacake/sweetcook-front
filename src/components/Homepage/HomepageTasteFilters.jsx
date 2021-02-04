import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../assets/css/styles.css";

function HomepageTasteFilters() {
	const [tastes, setTastes] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API}tastes/`)
			.then((response) => response.data)
			.then((data) => setTastes(data));
	}, []);
	return (
		<div>
			<h2>Plutôt sucré ou salé&nbsp;?</h2>
			<div className="taste-filters">
				{tastes &&
					tastes.map((taste) => (
						<div key={taste.id} className="taste-button">
							<img src={taste.picture} alt={taste.name} />
							<p>{taste.name}</p>
						</div>
					))}
			</div>
		</div>
	);
}

export default HomepageTasteFilters;
