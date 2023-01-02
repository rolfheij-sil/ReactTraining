import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
	return (
		<div>
			<Card>
				{props.users.map((user) => (
					<User data={user} />
				))}
			</Card>
		</div>
	);
};

export default UserList;
