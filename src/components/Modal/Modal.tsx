import React, { FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./_Modal.module.scss";
import Button from "../Button/Button";

export interface ModalProps {
	isShown: boolean;
	hide: () => void;
	modalContent: string;
	headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({ isShown, hide, modalContent, headerText }) => {
	const modal = (
		<React.Fragment>
			<div className={styles.BackDrop}></div>
			<div className={styles.Wrapper}>
				<div className={styles.StyledModal}>
					<div className={styles.Header}>
						<h1 className={styles.HeaderText}>{headerText}</h1>
						<Button text={"X"} handleClick={hide} value={"modalClose"} />
					</div>
					<div className={styles.Content}>{modalContent}</div>
				</div>
			</div>
		</React.Fragment>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
