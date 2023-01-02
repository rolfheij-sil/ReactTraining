import { useState } from "react";
// import Modal from "react-modal";
import Card from "../UI/Card";
import Modal from "../UI/Modal";
import classes from "./Form.module.css";

const Form = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	// const [modalIsOpen, setModalIsOpen] = useState(false);
	// const [modalMessage, setModalMessage] = useState("");
	const [error, setError] = useState();

	// const openModal = (message) => {
	// 	setModalMessage(message);
	// 	setModalIsOpen(true);
	// };

	// const closeModal = () => {
	// 	setModalIsOpen(false);
	// };

	const submitHandler = (e) => {
		e.preventDefault();

		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values)",
			});
			return;
		}

		if (+userAge < 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid age (>= 0)",
			});
			return;
		}

		props.addNewUser(userName, userAge);

		setUserName("");
		setUserAge("");
	};

	const userNameHandler = (e) => {
		setUserName(e.target.value);
	};

	const userAgeHandler = (e) => {
		setUserAge(e.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<Modal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className={classes.input}>
				<form onSubmit={submitHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={userName}
						onChange={userNameHandler}
					/>
					<label htmlFor="userage">Age (Years)</label>
					<input
						id="userage"
						type="number"
						value={userAge}
						onChange={userAgeHandler}
					/>
					<div className="form-style">
						<button type="submit">Add User</button>
					</div>
				</form>
			</Card>

			{/* <Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel={modalMessage}
				className={classes.modal}
			>
				<h2>Invalid input</h2>
				<div>{modalMessage}</div>
				<button onClick={closeModal}>Okay</button>
			</Modal> */}
		</div>
	);
};

export default Form;
