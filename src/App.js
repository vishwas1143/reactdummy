import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 50,
    date: new Date(2021, 8, 15),
  },
  {
    id: 'e2',
    title: 'TV',
    amount: 900,
    date: new Date(2021, 9, 20),
  },
  {
    id: 'e3',
    title: 'Car',
    amount: 500,
    date: new Date(2022, 3, 19),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default App;
