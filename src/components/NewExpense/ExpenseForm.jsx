import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => setTitle(e.target.value);
  const amountChangeHandler = (e) => setAmount(e.target.value);
  const dateChangeHandler = (e) => setDate(e.target.value);

  function submitEventHandler(e) {
    e.preventDefault();
    console.log(title);
    console.log(amount);
    console.log(date);
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitEventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label htmlFor="Title">Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="Amount">Amount</label>
          <input
            value={amount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label htmlFor="Date">Date</label>
          <input type="date" value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
