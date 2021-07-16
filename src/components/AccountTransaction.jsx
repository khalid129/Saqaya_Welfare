import React from 'react';
import "../css/Account.css";

const AccountTransaction = (props) => {
    return (
        <div className="account_ledger_details">
        <div className="expense_amount">
          <span id="amount">{props.expenseAmount}</span>
        </div>
        <div className="expense_place">
          <span id="expense">{props.expensePlace}</span>
        </div>
        <div className="expense_date">
          <span id="income">{props.expenseDate}</span>
        </div>
      </div>
    )
}

export default AccountTransaction
