import React from "react";
import "../css/Account.css";
import "../css/masjid.css";
import Header from "./Header";

const AccountDetails = () => {
  return (
    <div className="main_div">
      <Header name="کھاتہ کی تفصیل" />
      <div className="account_details">
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
      </div>
      <div className="account_header">
        <div className="account_ledger">
          <div className="amount">
            <span>رقم</span>
          </div>
          <div className="place">
            <span>جگہ خرچ</span>
          </div>
          <div className="date">
            <span>تاریخ</span>
          </div>
        </div>
      </div>
      <div className="account_ledger_details">
        <div className="expense_amount">
          <span id="amount">50000</span>
        </div>
        <div className="expense_place">
          <span id="expense">مسجد</span>
        </div>
        <div className="expense_date">
          <span id="income">16-Jul-21</span>
        </div>
      </div>
      <div className="account_ledger_details">
        <div className="expense_amount">
          <span id="amount">12000</span>
        </div>
        <div className="expense_place">
          <span id="expense">جانور</span>
        </div>
        <div className="expense_date">
          <span id="income">6-Jul-21</span>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
