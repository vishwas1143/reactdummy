
import React from 'react'; // Import React
import ExpenseItem from '../src/components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 50,
      date: new Date(2021, 8, 15),
    },
    {
      id: 'e2',
      title: 'Tv',
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

  return (
    <div>
      <h2>Let's Get Started</h2>
      {/* Use a loop to render ExpenseItem components */}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} // You should provide a unique key for each list item
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
