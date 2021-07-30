import React from "react";
import "../css/Account.css";
import "../css/masjid.css";

const Accountinfo = (props) => {
  return (
    <div className="account">
      <div className="account_name">
        <h1>{props.name}</h1>
      </div>
      <div className="account_ledger">
        <div className="button accoutDetail">{props.accountDetail}</div>
        <div className="button">{props.form}</div>
        <div className="balance">
          <label htmlFor="balance">بقیہ : </label>
          <span id="balance">{props.balance}</span>
        </div>
        <div className="expense">
          <label htmlFor="expense">خرچہ : </label>
          <span id="expense">{props.expense}</span>
        </div>
        <div className="income">
          <label htmlFor="income">آمدنی : </label>
          <span id="income">{props.income}</span>
        </div>
      </div>
    </div>
  );
};

export default Accountinfo;
