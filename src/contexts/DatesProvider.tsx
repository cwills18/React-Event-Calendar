import * as React from "react";
import { getTodaysDayName, getTodaysMonthName } from "../services/dates";

export interface DateProps {
	dayNum: number;
	dayName: string;
	date: number;
	monthNum: number;
	monthName: string;
	year: number;
}

interface ContextProps {
	dateInView: DateProps;
	setDateInView: (dateInView: DateProps) => void;
	loadTodaysDate: () => DateProps;
}

export const DatesContext = React.createContext<ContextProps>({
	dateInView: {
		dayNum: new Date().getDay(),
		dayName: getTodaysDayName("en-AU"),
		date: new Date().getDate(),
		monthNum: new Date().getMonth() + 1,
		monthName: getTodaysMonthName("en-AU"),
		year: new Date().getFullYear(),
	},
	setDateInView: () => null,
	loadTodaysDate: () => {
		console.log("triggered in context");
		let today: DateProps = {
			dayNum: new Date().getDay(),
			dayName: getTodaysDayName("en-AU"),
			date: new Date().getDate(),
			monthNum: new Date().getMonth() + 1,
			monthName: getTodaysMonthName("en-AU"),
			year: new Date().getFullYear(),
		};
		return today;
	},
});

const DatesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const loadTodaysDate = () => {
		console.log("triggered inside provider");
		let today: DateProps = {
			dayNum: new Date().getDay(),
			dayName: getTodaysDayName("en-AU"),
			date: new Date().getDate(),
			monthNum: new Date().getMonth() + 1,
			monthName: getTodaysMonthName("en-AU"),
			year: new Date().getFullYear(),
		};
		return today;
	};
	const [dateInView, setDateInView] = React.useState<DateProps>(loadTodaysDate);

	const toPass = { dateInView, setDateInView, loadTodaysDate };

	return <DatesContext.Provider value={toPass}>{children}</DatesContext.Provider>;
};

export default DatesProvider;
