import React from 'react';
import "../css/Account.css";

const AccountTransaction = (props) => {

  return (
        <div className="account_ledger_details">
        <div className="expense_amount">
        <span id="amount">{props.income.amount}</span>
        </div>
        <div className="expense_place">
          <span id="expense">مسجد</span>
        </div>
        <div className="expense_date">
        <span id="income">{props.income.date}</span>
        </div>
      </div>
    )
}

export default AccountTransaction
