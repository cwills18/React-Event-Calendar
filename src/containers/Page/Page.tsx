import MonthlyView from "../MonthlyView/MonthlyView";
import styles from "./_Page.module.scss";

const Page = () => {
	// const loadTodaysDate = React.useContext(DatesContext);

	// useEffect(() => {
	//     loadTodaysDate();
	// }, [])

	return (
		<div className={styles.Page}>
			<MonthlyView />
		</div>
	);
};

export default Page;
