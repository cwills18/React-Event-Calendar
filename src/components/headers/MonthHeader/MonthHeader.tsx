import React from "react";
import { DateProps, DatesContext } from "../../../contexts/DatesProvider";
import styles from "./_MonthHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";

interface MonthHeaderProps {
	handleMonthIncrement: () => void;
	handleMonthDecrement: () => void;
	handleTodayButton: () => void;
	handleViewChange: (viewType: string) => void;
}

const MonthHeader: React.FC<MonthHeaderProps> = ({ handleMonthIncrement, handleMonthDecrement, handleTodayButton, handleViewChange }) => {
	const { dateInView } = React.useContext(DatesContext);

	return (
		<div className={styles.MonthHeader}>
			<div className={styles.TodayButton}>
				<Button text={"Today"} handleClick={handleTodayButton} value={"today"} />
			</div>
			<div className={styles.TextAndArrows}>
				<FontAwesomeIcon className={styles.Arrows} icon={faCircleChevronLeft} onClick={handleMonthDecrement} />
				<div className={styles.MonthYearDiv}>
					<h1 className={styles.HeaderText}>
						{dateInView?.monthName} {dateInView?.year}
					</h1>
					<FontAwesomeIcon className={styles.YearSelect} icon={faSortDown} />
				</div>
				<FontAwesomeIcon className={styles.Arrows} icon={faCircleChevronRight} onClick={handleMonthIncrement} />
			</div>
			<div className={styles.ViewButtons}>
				{/* the handleClicks will eventually be updated here to change between month/week/year view */}
				<Button text="Month" handleClick={handleViewChange} value={"month"} />
				<Button text="Week" handleClick={handleViewChange} value={"week"} />
				<Button text="Day" handleClick={handleViewChange} value={"day"} />
			</div>
		</div>
	);
};

export default MonthHeader;
