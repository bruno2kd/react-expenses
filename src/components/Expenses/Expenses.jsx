import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (!filteredYear) return true;
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseList filteredExpenses={filteredExpenses} />
      </Card>
  );
}

export default Expenses;
