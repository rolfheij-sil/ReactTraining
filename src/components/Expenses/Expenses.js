import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filterYear, setFilterYear] = useState("2021");

	const filteredExpenseArray = props.expenses.filter(
		(expense) => expense.date.getFullYear() === +filterYear
	);

	const yearValueChangeHandler = (value) => {
		setFilterYear(value);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={yearValueChangeHandler}
					selectedYear={filterYear}
				/>
				<ExpensesChart expenses={filteredExpenseArray} />
				<ExpensesList expenses={filteredExpenseArray} />
			</Card>
		</div>
	);
};

export default Expenses;
