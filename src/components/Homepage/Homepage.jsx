import HomepageBrand from "./HomepageBrand";
import HomepageLatest from "./HomepageLatest";
import HomepageTasteFilters from "./HomepageTasteFilters";

import "../../assets/css/styles.css";

function Homepage() {
	return (
		<div className="homepage">
			<HomepageBrand />
			<HomepageLatest />
			<HomepageTasteFilters />
		</div>
	);
}

export default Homepage;
