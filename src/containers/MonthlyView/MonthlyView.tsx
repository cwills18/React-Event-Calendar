import React from "react";
import MonthHeader from "./../../components/headers/MonthHeader/MonthHeader";
import MonthGrid from "../grids/MonthGrid/MonthGrid";
import styles from "./_MonthlyView.module.scss";

// type AppProps = {
// 	// : string;
// };

const MonthlyView: React.FC /*<AppProps>*/ = ({}) => {
	return (
		<div className={styles.MonthlyView}>
			<MonthHeader />
			<MonthGrid />
		</div>
	);
};

export default MonthlyView;
