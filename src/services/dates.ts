//funtion that takes in num values for month and year and prepares string for input into functions below
export const formatMMYYYY = (month: number, year: number) => {
	const monthString = month < 10 ? "0" + month : "" + month;
	return `${monthString}/${year}`;
};

//function that takes in a date string in MM/YYYY form and returns an array of the 35 dates that will be in view
export const monthlyViewDates = (date: string) => {
	const dates = new Array(35).fill(0);
	const first = findFirstDayMonth(date);
	const daysInMonth = noDaysInMonth(date);
	if (!daysInMonth || !first) {
		return undefined;
	}
	//this month's dates
	for (let i = 1; i <= daysInMonth; i++) {
		const index = first - 1 + i;
		dates[index] = { date: i, thisMonth: true };
	}
	//next month's dates
	let nextMonthsDate = 1;
	for (let i = first + daysInMonth; i < dates.length; i++) {
		dates[i] = { date: nextMonthsDate, thisMonth: false };
		nextMonthsDate++;
	}
	//last month's dates
	let lastMonthsDate = previousLastDate(date);
	if (!lastMonthsDate) {
		return undefined;
	}
	for (let i = first - 1; i >= 0; i--) {
		dates[i] = { date: lastMonthsDate, thisMonth: false };
		lastMonthsDate--;
	}
	return dates;
};

//function to tell what day of week the first of a month is. String passed in will be passed in MM/YYYY form
//returns integer rep (0 is Sunday)
const findFirstDayMonth = (date: string) => {
	if (date.trim().length !== 7 || date.indexOf("/") == -1) {
		return undefined;
	}
	const month = date.slice(0, 2);
	const year = date.slice(3);
	const fullDate = new Date(`${year}-${month}-01`);
	const firstDay = fullDate.getDay();
	return firstDay;
};

//function that will return the last date of the previous month
//String passed in will be passed in MM/YYYY form (to handle leap year febs)
const noDaysInMonth = (date: string) => {
	if (date.trim().length !== 7 || date.indexOf("/") == -1) {
		return undefined;
	}
	const month = date.slice(0, 2);
	if (month !== "02") {
		switch (month) {
			case "01":
			case "03":
			case "05":
			case "07":
			case "08":
			case "10":
			case "12":
				return 31;
			case "04":
			case "06":
			case "09":
			case "11":
				return 30;
			default:
				return undefined;
		}
	} else {
		const year = parseInt(date.slice(3));
		if (year % 4) {
			return 28;
		} else {
			return 29;
		}
	}
};

//function that will return the last date of the previous month
//String passed in will be passed in MM/YYYY form (to handle leap year febs)
const previousLastDate = (date: string) => {
	if (date.trim().length !== 7 || date.indexOf("/") == -1) {
		return undefined;
	}
	const month = date.slice(0, 2);
	if (month !== "03") {
		switch (month) {
			case "01":
			case "02":
			case "04":
			case "06":
			case "08":
			case "09":
			case "11":
				return 31;
			case "05":
			case "07":
			case "10":
			case "12":
				return 30;
			default:
				return undefined;
		}
	} else {
		const year = parseInt(date.slice(3));
		if (year % 4) {
			return 28;
		} else {
			return 29;
		}
	}
};
