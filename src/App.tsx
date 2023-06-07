import DatesProvider from "./contexts/DatesProvider";
import Page from "./containers/Page/Page";
import "./_main.scss";

/* Planning

(long term goal)
//Landing page is months overview with ability to change year
//clicking on month grid opens that month

(current goal)
display monthly view

(components needed)
1. Header
2. Grid

(containers needed)
1. Header 
> button for next month >> for next year
//today button
logic for button handling here


2. Grid Container
logic for getting days of month here
service function to return array of dates of month in sun -> sat order
logic here for specific grid displayed-
if week - weekly container with nested component
if month - monthly container with nested component

3. Page Container
So that easy to handle logic for switching views (later)


(later)
//dropdown top left that changes between year, month and week

*/

function App() {
	return (
		<>
			<DatesProvider>
				<Page />
			</DatesProvider>
		</>
	);
}

export default App;
