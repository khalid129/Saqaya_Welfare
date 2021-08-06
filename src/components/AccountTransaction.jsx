import React from 'react';
import "../css/Account.css";

const AccountTransaction = ({expenseAmount,expensePlace,expenseDate}) => {
    return (
        <div className="account_ledger_details">
        <div className="expense_amount">
          <span id="amount">{expenseAmount}</span>
        </div>
        {
          expensePlace && 
          <div className="expense_place">
          <span id="expense">{expensePlace}</span>
        </div>
        }
        <div className="expense_date">
          <span id="income">{expenseDate}</span>
        </div>
      </div>
    )
}

export default AccountTransaction
