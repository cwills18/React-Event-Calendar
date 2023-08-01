import React from "react";
import MonthlyView from "../MonthlyView/MonthlyView";
import styles from "./_Page.module.scss";
import WeeklyView from "../WeeklyView/WeeklyView";
import { ViewContext } from "../../contexts/ViewProvider";

const Page = () => {
	const { view, setView } = React.useContext(ViewContext);

	return (
		<div className={styles.Page}>
			{view === "month" && <MonthlyView />}
			{view === "week" && <WeeklyView />}
		</div>
	);
};

export default Page;
