import React, { useEffect } from "react";
import { DatesContext } from "../../../contexts/DatesProvider";
import { formatMMYYYY, monthlyViewDates } from "../../../services/dates";
import DateCard from "../../../components/cards/DateCard/DateCard";
import styles from "./_MonthGrid.module.scss";
import { Modal } from "../../../components/Modal/Modal";
import useModal from "../../../custom-hooks/useModal";

const MonthGrid: React.FC = ({}) => {
	const { dateInView } = React.useContext(DatesContext);
	const [shownDates, setShownDates] = React.useState<any[] | undefined>(undefined);
	const { isShown, toggle } = useModal();

	useEffect(() => {
		if (dateInView) {
			const formattedDate = formatMMYYYY(dateInView.monthNum, dateInView.year);
			const dates = monthlyViewDates(formattedDate);
			setShownDates(dates);
		}
	}, [dateInView]);

	return (
		<div className={styles.Grid}>
			<Modal isShown={isShown} hide={toggle} modalContent={""} headerText={"Day Details"} />
			<div className={styles.HeaderRow}>
				<h3 className={styles.HeaderRow__Label}>Sunday</h3>
				<h3 className={styles.HeaderRow__Label}>Monday</h3>
				<h3 className={styles.HeaderRow__Label}>Tuesday</h3>
				<h3 className={styles.HeaderRow__Label}>Wednesday</h3>
				<h3 className={styles.HeaderRow__Label}>Thursday</h3>
				<h3 className={styles.HeaderRow__Label}>Friday</h3>
				<h3 className={styles.HeaderRow__Label}>Saturday</h3>
			</div>
			{!shownDates && <p>Sorry, something has gone wrong. Please try again later.</p>}
			<div className={styles.Grid__Dates}>
				{shownDates &&
					shownDates.map((date) => {
						return (
							<DateCard
								key={`${date.date} ${date.thisMonth}`}
								date={date.date}
								thisMonth={date.thisMonth}
								handleClick={toggle}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default MonthGrid;
