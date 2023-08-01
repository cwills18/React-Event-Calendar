import React from "react";
import { DateProps, DatesContext } from "../../../contexts/DatesProvider";
import styles from "./_WeekHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button/Button";
import { returnSundayDate } from "../../../services/dates";

interface WeekHeaderProps {
	handleWeekIncrement: () => void;
	handleWeekDecrement: () => void;
	handleTodayButton: () => void;
	handleViewChange: (viewType: string) => void;
}

const WeekHeader: React.FC<WeekHeaderProps> = ({ handleTodayButton, handleViewChange, handleWeekIncrement, handleWeekDecrement }) => {
	const { dateInView } = React.useContext(DatesContext);

	return (
		<div className={styles.WeekHeader}>
			<div className={styles.TodayButton}>
				<Button text={"Today"} handleClick={handleTodayButton} value={"today"} />
			</div>
			<div className={styles.TextAndArrows}>
				<FontAwesomeIcon className={styles.Arrows} icon={faCircleChevronLeft} onClick={handleWeekDecrement} />
				<div className={styles.MonthYearDiv}>
					<h1 className={styles.HeaderText}>
						{returnSundayDate(dateInView).monthName} {returnSundayDate(dateInView).year}
					</h1>
					<FontAwesomeIcon className={styles.YearSelect} icon={faSortDown} />
				</div>
				<FontAwesomeIcon className={styles.Arrows} icon={faCircleChevronRight} onClick={handleWeekIncrement} />
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

export default WeekHeader;
