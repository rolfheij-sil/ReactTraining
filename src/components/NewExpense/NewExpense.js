import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [formStartState, setFormStartState] = useState(true);

	const saveExpanseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		setFormStartState(true);
	};

	const cancelHandler = () => {
		setFormStartState(true);
	};

	let panelContent = (
		<button
			onClick={() =>
				setFormStartState(() => {
					return false;
				})
			}
		>
			Add New Expense
		</button>
	);

	if (!formStartState) {
		panelContent = (
			<ExpenseForm
				onSaveExpenseData={saveExpanseDataHandler}
				onCancel={cancelHandler}
			/>
		);
	}

	return <div className="new-expense">{panelContent}</div>;
};

export default NewExpense;
