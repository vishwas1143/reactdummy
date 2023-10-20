import React from "react";
import './ExpenseForm.css';


const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense_controls">
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2024-12-31" />
                </div>
            </div>
            <div className="new-expense_actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
