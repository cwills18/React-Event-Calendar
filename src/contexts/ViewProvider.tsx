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
	view: string;
	setView: (viewType: string) => void;
}

export const ViewContext = React.createContext<ContextProps>({
	view: "month",
	setView: () => null,
});

const ViewProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [view, setView] = React.useState<string>("month");

	const toPass = { view, setView };

	return <ViewContext.Provider value={toPass}>{children}</ViewContext.Provider>;
};

export default ViewProvider;
