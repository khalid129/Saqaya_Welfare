import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const AccountIncome = (props) => {
  return (
    <div className="main_div">
      <Header name="آمدن کی تفصیل" />
      {/* <div className="account_details">
        {
          <Accountinfo
            data={props.account}
            income={props.income}
            expense={props.expense}
            loan={props.loan}
          />
        }
      </div> */}
      <div className="account_header">
        <div className="account_text">
          <div className="amount">
            <span>کل رقم</span>
          </div>
          <div className="amount">
            <span>کل رقم</span>
          </div>
          <div className="place">
            <span>مد</span>
          </div>
          <div className="date">
            <span>تاریخ</span>
          </div>
        </div>
      </div>

      {props.incomes.map((income) => {
        return <AccountTransaction income={income} />;
      })}
    </div>
  );
};

export default AccountIncome;