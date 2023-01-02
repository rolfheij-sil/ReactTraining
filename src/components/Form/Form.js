import { useState } from "react";
import Modal from "react-modal";
import "./Form.css";

const Form = (props) => {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [modalMessage, setModalMessage] = useState("");

	const openModal = (message) => {
		setModalMessage(message);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			openModal("Please enter a valid name and age (non-empty values)");
			return;
		}

		if (userAge < 0) {
			openModal("Please enter a valid age (> 0)");
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

	return (
		<div>
			<form onSubmit={submitHandler}>
				<h2>Username</h2>
				<input type="text" value={userName} onChange={userNameHandler} />
				<h2>Age (Years)</h2>
				<input type="number" value={userAge} onChange={userAgeHandler} />
				<div class="form-style">
					<button type="submit">Add User</button>
				</div>
			</form>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel={modalMessage}
				className="modal"
			>
				<h2>Invalid input</h2>
				<div>{modalMessage}</div>
				<button onClick={closeModal}>Okay</button>
			</Modal>
		</div>
	);
};

export default Form;
