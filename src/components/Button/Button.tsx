import React from "react";
import styles from "./_Button.module.scss";

interface ButtonProps {
	text: string;
	handleClick: (viewType: string) => void;
	value: string;
}

const App: React.FC<ButtonProps> = ({ text, handleClick, value }) => {
	return (
		<>
			<button
				className={styles.Button}
				onClick={() => {
					handleClick(value);
				}}
				value={value}
			>
				{text}
			</button>
		</>
	);
};

export default App;
