import DatesProvider from "./contexts/DatesProvider";
import Page from "./containers/Page/Page";
import "./_main.scss";
/* Planning

(long term goal)
//Landing page is months overview with ability to change year
//clicking on month grid opens that month


//component for month title
> button for next month >> for next year

//dropdown top left that changes between year, month and week

//today button

grid container
if week - weekly container with nested component
if month - monthly container with nested component

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
