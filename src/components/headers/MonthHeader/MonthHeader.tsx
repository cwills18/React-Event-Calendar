import React from "react";
import { DatesContext } from "../../../contexts/DatesProvider";
import styles from "./_MonthHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MonthHeader = () => {
	const { dateInView } = React.useContext(DatesContext);
	return (
		<div className={styles.MonthHeader}>
			<h1>
				{dateInView?.monthName} {dateInView?.year}
			</h1>
			<button>&#128317;</button>
			<FontAwesomeIcon icon={faCircleChevronRight} />
		</div>
	);
};

export default MonthHeader;
