import React from "react";
import styles from "./_DateCard.module.scss";

interface DateCardProps {
	date: string;
	thisMonth: boolean;
	handleClick: () => void;
}

const DateCard: React.FC<DateCardProps> = ({ date, thisMonth, handleClick }) => {
	return (
		<>
			<div className={styles.Card} onClick={handleClick}>
				<p className={styles.Number} style={{ color: thisMonth ? "black" : "grey" }}>
					{date}
				</p>
			</div>
		</>
	);
};

export default DateCard;
