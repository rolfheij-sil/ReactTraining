import { useState } from "react";
import UserList from "./components/List/UserList";
import Form from "./components/Form/Form";
import Card from "./components/UI/Card";

const dummyUsers = [
	// { key: "user1", name: "Rolf", age: 31 },
	// { key: "user2", name: "Rofl", age: 13 },
];

function App() {
	const [users, setUsers] = useState(dummyUsers);

	const newUserHandler = (userName, userAge) => {
		setUsers([{ key: "userX", name: userName, age: userAge }, ...users]);
	};

	return (
		<div>
			<Card>
				<Form addNewUser={newUserHandler} />
			</Card>
			{users.length > 0 && <UserList users={users} />}
		</div>
	);
}

export default App;
