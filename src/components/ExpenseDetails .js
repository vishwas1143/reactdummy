import React from 'react';

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <p>Amount: ${props.amount}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default ExpenseDetails;