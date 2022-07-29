import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {
  let expensesContent = <p>No expense found</p>;
  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <div>{expensesContent}</div>;
};

export default ExpenseList;
