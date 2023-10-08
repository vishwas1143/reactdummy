import React from 'react'; // Import React (assuming you are using React)
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className='expense-item'> {/* Remove the dot (.) before 'expense-item' */}
      <div>{props.date.toISOString()}</div> {/* Use 'date' instead of 'Date' */}
      <div className='expense-item_description'>
        <h2>{props.title}</h2> {/* Use 'props.title' instead of 'PaymentResponse.title' */}
        <div className='expense-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
