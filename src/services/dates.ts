import { DateProps } from "../contexts/DatesProvider";

//funtion that takes in num values for month and year and prepares string for input into functions below
export const formatMMYYYY = (month: number, year: number) => {
	const monthString = month < 10 ? "0" + month : "" + month;
	return `${monthString}/${year}`;
};

//function that returns today's name (locale for Aus is "en-AU")
export const getTodaysDayName = (locale: string) => {
	let date = new Date();
	return date.toLocaleDateString(locale, { weekday: "long" });
};

//function that returns the current month name (locale for Aus is "en-AU")
export const getTodaysMonthName = (locale: string) => {
	let date = new Date();
	return date.toLocaleDateString(locale, { month: "long" });
};

//function that takes in number of month to return the name (need to pass in locale "en-AU" to use the .toLocaleDateString)
export const getMonthNameFromNum = (locale: string, monthNum: number) => {
	let monthNumber = monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
	let date = new Date(`${monthNumber}/01/2023`);
	return date.toLocaleDateString(locale, { month: "long" });
};

//a function that will take in the dateInView state object and return with the first day of the next month
export const incrementByMonth = (dateObj: DateProps) => {
	let { date, dayNum, monthNum, monthName, year, ...rest } = dateObj;
	if (monthNum === 12) {
		monthNum = 1;
		year++;
	} else {
		monthNum++;
	}
	monthName = getMonthNameFromNum("en-AU", monthNum);
	const dateFull = new Date(`${monthName} 1, ${year}`);
	dayNum = dateFull.getDay();
	const newDate = {
		date: 1,
		dayNum,
		monthNum,
		monthName,
		year,
		...rest,
	};
	return newDate;
};

//a function that will take in the dateInView state object and return with the first day of the next month
export const decrementByMonth = (dateObj: DateProps) => {
	let { date, dayNum, monthNum, monthName, year, ...rest } = dateObj;
	if (monthNum === 1) {
		monthNum = 12;
		year--;
	} else {
		monthNum--;
	}
	monthName = getMonthNameFromNum("en-AU", monthNum);
	const dateFull = new Date(`${monthName} 1, ${year}`);
	dayNum = dateFull.getDay();
	const newDate = {
		date: 1,
		dayNum,
		monthNum,
		monthName,
		year,
		...rest,
	};
	return newDate;
};

//function that takes in a date string in MM/YYYY form and returns an array of the 35 dates that will be in view, unless the month starts on Fri or Sat and has 30 or 31 days in which it will return 42 dates
export const monthlyViewDates = (date: string) => {
	const dates = new Array(42).fill(0);
	const first = findFirstDayMonth(date);
	const daysInMonth = noDaysInMonth(date);
	if (!daysInMonth || typeof first !== "number" || first > 6 || first < 0) {
		return undefined;
	}
	//this month's dates
	for (let i = 1; i <= daysInMonth; i++) {
		const index = first - 1 + i;
		dates[index] = { date: i, thisMonth: true };
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
	//next month's dates
	if (dates[35].date === 30 || dates[35].date === 31) {
		let nextMonthsDate = 1;
		for (let i = first + daysInMonth; i < dates.length; i++) {
			dates[i] = { date: nextMonthsDate, thisMonth: false };
			nextMonthsDate++;
		}
		return dates;
	} else {
		let nextMonthsDate = 1;
		let shortenedDates = dates.slice(0, 35);
		for (let i = first + daysInMonth; i < shortenedDates.length; i++) {
			shortenedDates[i] = { date: nextMonthsDate, thisMonth: false };
			nextMonthsDate++;
		}
		return shortenedDates;
	}
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

//function that will return the number of days in the month
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

//function that takes in a date object and returns a date object for the sunday of that week.
export const returnSundayDate = (dateObj: DateProps) => {
	let { dayNum, date, ...rest } = dateObj;
	if (dayNum === 0) {
		return dateObj;
	} else {
		const sundayDate = date - dayNum;
		if (sundayDate > 0) {
			const sundayDateObject = {
				dayNum: 0,
				date: sundayDate,
				...rest,
			};
			return sundayDateObject;
		} else {
			const differentMonthObject = decrementByMonth(dateObj);
			let { date, dayNum, monthNum, year, ...rest } = differentMonthObject;
			const dateOfEndOfLastMonth = noDaysInMonth(formatMMYYYY(monthNum, year));
			if (!dateOfEndOfLastMonth) {
				return differentMonthObject;
			}
			//NB: Because sundayDate will be negative in calculation above, performing this calculation will tell us the new date
			const newDate = dateOfEndOfLastMonth + sundayDate;
			const newMonthObject = {
				date: newDate,
				dayNum: 0,
				monthNum,
				year,
				...rest,
			};
			return newMonthObject;
		}
	}
};

//function that produces an array of 7 dates based on the sunday date of that week
export const weekViewDates = (sundayDateObject: DateProps) => {
	let { date, dayNum, monthNum, monthName, year, ...rest } = sundayDateObject;
	const maxDate = noDaysInMonth(formatMMYYYY(monthNum, year));
	let dateArray = [];
	if (!maxDate || dayNum !== 0) {
		return undefined;
	} else {
		let i = 0;
		let thisMonth = true;
		while (i < 7) {
			if (date <= maxDate) {
				const nextDate = {
					date,
					dayNum: i,
					monthNum,
					monthName,
					year,
					thisMonth,
					...rest,
				};
				dateArray.push(nextDate);
			} else {
				date = 1;
				if (monthNum === 12) {
					year++;
				}
				monthNum++;
				monthName = getMonthNameFromNum("en-AU", monthNum);
				thisMonth = false;
				const nextDate = {
					date,
					dayNum: i,
					monthNum,
					year,
					thisMonth,
					...rest,
				};
				dateArray.push(nextDate);
			}
			date++;
			i++;
		}
		return dateArray;
	}
};

export const incrementByWeek = (dateObj: DateProps) => {
	let { date, monthNum, monthName, year, ...rest } = dateObj;
	const maxDate = noDaysInMonth(formatMMYYYY(monthNum, year));
	if (!maxDate) {
		return undefined;
	}
	if (date + 7 <= maxDate) {
		return {
			date: date + 7,
			monthNum,
			monthName,
			year,
			...rest,
		};
	} else {
		if (monthNum === 12) {
			year++;
		}
		monthNum++;
		monthName = getMonthNameFromNum("en-AU", monthNum);
		date = date + 7 - maxDate;
		return {
			date,
			monthNum,
			monthName,
			year,
			...rest,
		};
	}
};

export const decrementByWeek = (dateObj: DateProps) => {
	let { date, monthNum, monthName, year, ...rest } = dateObj;
	if (date - 7 > 0) {
		return {
			date: date - 7,
			monthNum,
			monthName,
			year,
			...rest,
		};
	} else {
		if (monthNum === 1) {
			year--;
		}
		monthNum--;
		monthName = getMonthNameFromNum("en-AU", monthNum);
		const previousMonthsLastDate = noDaysInMonth(formatMMYYYY(monthNum, year));
		if (!previousMonthsLastDate) {
			return undefined;
		}
		date = date - 7 + previousMonthsLastDate;
		return {
			date,
			monthNum,
			monthName,
			year,
			...rest,
		};
	}
};
