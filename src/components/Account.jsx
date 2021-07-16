import React from "react";
import Header from "./Header";
import "../css/Account.css";

const Account = () => {
  return (
    <div className="main_div">
      <Header name="کھاتہ" />
      <div className="input_box">
        <div className="search_box">
          <input type="text" placeholder="انداج کریں" />
        </div>
        <div className="button">تلاش کریں</div>
      </div>
      <div className="accounts_box">
        <div className="account">
          <div className="account_name">
            <h1>بلال</h1>
          </div>
          <div className="account_ledger">
            <div className="balance">
              <label htmlFor="balance">بقیہ : </label>
              <span id="balance">200000</span>
            </div>
            <div className="expense">
              <label htmlFor="expense">خرچہ : </label>
              <span id="expense">150000</span>
            </div>
            <div className="income">
              <label htmlFor="income">آمدنی : </label>
              <span id="income">50000</span>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="account_name">
            <h1>وقار</h1>
          </div>
          <div className="account_ledger">
            <div className="balance">
              <label htmlFor="balance">بقیہ : </label>
              <span id="balance">150000</span>
            </div>
            <div className="expense">
              <label htmlFor="expense">خرچہ : </label>
              <span id="expense">50000</span>
            </div>
            <div className="income">
              <label htmlFor="income">آمدنی : </label>
              <span id="income">100000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
