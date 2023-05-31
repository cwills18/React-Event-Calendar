import * as React from "react";

type DateProps = {
	dayNum: number;
	dayName: string;
	date: number;
	monthNum: number;
	monthName: string;
	year: number;
};

interface ContextProps {
	dateInView: DateProps | null;
	setDateInView: (dateInView: DateProps) => void;
	loadTodaysDate: () => Promise<void>;
}

export const DatesContext = React.createContext<ContextProps>({
	dateInView: null,
	setDateInView: () => null,
	loadTodaysDate: async () => {},
});

const DatesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [dateInView, setDateInView] = React.useState<DateProps | null>(null);

	const getDayName = (locale: string) => {
		let date = new Date();
		return date.toLocaleDateString(locale, { weekday: "long" });
	};

	const getMonthName = (locale: string) => {
		let date = new Date();
		return date.toLocaleDateString(locale, { month: "long" });
	};

	const loadTodaysDate = async () => {
		let today: DateProps = {
			dayNum: new Date().getDay(),
			dayName: getDayName("en-AU"),
			date: new Date().getDate(),
			monthNum: new Date().getMonth(),
			monthName: getMonthName("en-AU"),
			year: new Date().getFullYear(),
		};
		setDateInView(today);
	};

	const toPass = { dateInView, setDateInView, loadTodaysDate };

	React.useEffect(() => {
		loadTodaysDate();
	}, []);

	return <DatesContext.Provider value={toPass}>{children}</DatesContext.Provider>;
};

export default DatesProvider;
