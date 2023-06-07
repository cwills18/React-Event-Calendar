import React from "react";
import styles from "./_DateCard.module.scss";

type DateCardProps = {
	date: string;
	thisMonth: boolean;
};

const DateCard: React.FC<DateCardProps> = ({ date, thisMonth }) => {
	return (
		<>
			<div className={styles.Card}>
				<p className={styles.Number} style={{ color: thisMonth ? "black" : "grey" }}>
					{date}
				</p>
			</div>
		</>
	);
};

export default DateCard;
