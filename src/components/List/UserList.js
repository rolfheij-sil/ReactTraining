import Card from "../UI/Card";
import User from "./User";

const UserList = (props) => {
	return (
		<div>
			<Card>
				<ul>
					{props.users.map((user) => (
						<li key={user.key}>
							<User data={user} />
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
};

export default UserList;
