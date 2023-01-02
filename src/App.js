import { useState } from "react";
import UserList from "./components/List/UserList";
import Form from "./components/Form/Form";

function App() {
	const [users, setUsers] = useState([]);

	const newUserHandler = (userName, userAge) => {
		setUsers([
			{ key: Math.random().toString(), name: userName, age: userAge },
			...users,
		]);
	};

	return (
		<div>
			<Form addNewUser={newUserHandler} />
			{users.length > 0 && <UserList users={users} />}
		</div>
	);
}

export default App;
