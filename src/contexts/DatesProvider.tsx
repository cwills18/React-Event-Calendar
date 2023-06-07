import * as React from "react";

interface DateProps {
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
	loadTodaysDate: () => void;
}

const getDayName = (locale: string) => {
	let date = new Date();
	return date.toLocaleDateString(locale, { weekday: "long" });
};

const getMonthName = (locale: string) => {
	let date = new Date();
	return date.toLocaleDateString(locale, { month: "long" });
};

export const DatesContext = React.createContext<ContextProps>({
	dateInView: {
		dayNum: new Date().getDay(),
		dayName: getDayName("en-AU"),
		date: new Date().getDate(),
		monthNum: new Date().getMonth() + 1,
		monthName: getMonthName("en-AU"),
		year: new Date().getFullYear(),
	},
	setDateInView: () => null,
	loadTodaysDate: () => {},
});

const DatesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const loadTodaysDate = () => {
		let today: DateProps = {
			dayNum: new Date().getDay(),
			dayName: getDayName("en-AU"),
			date: new Date().getDate(),
			monthNum: new Date().getMonth() + 1,
			monthName: getMonthName("en-AU"),
			year: new Date().getFullYear(),
		};
		return today;
	};
	const [dateInView, setDateInView] = React.useState<DateProps>(loadTodaysDate);

	const toPass = { dateInView, setDateInView, loadTodaysDate };

	// React.useEffect(() => {
	// 	loadTodaysDate();
	// }, []);

	return <DatesContext.Provider value={toPass}>{children}</DatesContext.Provider>;
};

export default DatesProvider;
