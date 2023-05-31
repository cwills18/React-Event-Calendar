import React from "react";
import { DatesContext } from "../../../contexts/DatesProvider";
import "./_MonthHeader.module.scss";

const MonthHeader = () => {
	const { dateInView } = React.useContext(DatesContext);
	return (
		<div>
			<h1>
				{dateInView?.monthName} {dateInView?.year}
			</h1>
			<button>&#128317;</button>
		</div>
	);
};

export default MonthHeader;
