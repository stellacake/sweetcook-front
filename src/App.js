import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import AddRecipe from "./components/AddRecipe/AddRecipe";

import "./assets/css/styles.css";

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/add-recipe" component={AddRecipe} />
			</Switch>
		</div>
	);
}

export default App;
