import React from "react";
import styles from "./_WeeklyView.module.scss";
import { DatesContext } from "../../contexts/DatesProvider";
import { ViewContext } from "../../contexts/ViewProvider";
import WeekHeader from "../../components/headers/WeekHeader/WeekHeader";
import WeekGrid from "../grids/WeekGrid/WeekGrid";
import { decrementByWeek, incrementByWeek } from "../../services/dates";

const WeeklyView = () => {
	const { dateInView, setDateInView, loadTodaysDate } = React.useContext(DatesContext);
	const { view, setView } = React.useContext(ViewContext);

	const handleTodayButton = () => {
		const newDate = loadTodaysDate();
		setDateInView(newDate);
	};

	const handleViewChange = (viewType: string) => {
		setView(viewType);
	};

	const handleWeekIncrement = () => {
		const newDate = incrementByWeek(dateInView);
		if (newDate) {
			setDateInView(newDate);
		}
	};

	const handleWeekDecrement = () => {
		const newDate = decrementByWeek(dateInView);
		if (newDate) {
			setDateInView(newDate);
		}
	};

	return (
		<div className={styles.WeeklyView}>
			<WeekHeader
				handleTodayButton={handleTodayButton}
				handleViewChange={handleViewChange}
				handleWeekIncrement={handleWeekIncrement}
				handleWeekDecrement={handleWeekDecrement}
			/>
			<WeekGrid />
		</div>
	);
};

export default WeeklyView;
