const User = (props) => {
	return (
		<p>
			{props.data.name} ({props.data.age} years old)
		</p>
	);
};

export default User;
