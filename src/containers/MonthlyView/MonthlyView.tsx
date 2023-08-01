import React from "react";
import MonthHeader from "./../../components/headers/MonthHeader/MonthHeader";
import MonthGrid from "../grids/MonthGrid/MonthGrid";
import styles from "./_MonthlyView.module.scss";
import { DatesContext } from "../../contexts/DatesProvider";
import { decrementByMonth, incrementByMonth } from "../../services/dates";
import { ViewContext } from "../../contexts/ViewProvider";

const MonthlyView: React.FC = ({}) => {
	const { dateInView, setDateInView, loadTodaysDate } = React.useContext(DatesContext);
	const { view, setView } = React.useContext(ViewContext);

	const handleMonthIncrement = () => {
		const newDate = incrementByMonth(dateInView);
		setDateInView(newDate);
	};

	const handleMonthDecrement = () => {
		const newDate = decrementByMonth(dateInView);
		console.log(newDate);
		setDateInView(newDate);
	};

	const handleTodayButton = () => {
		const newDate = loadTodaysDate();
		setDateInView(newDate);
	};

	const handleViewChange = (viewType: string) => {
		setView(viewType);
	};

	return (
		<div className={styles.MonthlyView}>
			<MonthHeader
				handleMonthIncrement={handleMonthIncrement}
				handleMonthDecrement={handleMonthDecrement}
				handleTodayButton={handleTodayButton}
				handleViewChange={handleViewChange}
			/>
			<MonthGrid />
		</div>
	);
};

export default MonthlyView;
