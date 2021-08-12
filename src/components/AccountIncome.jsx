import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const AccountIncome = () => {
  return (
    <div className="main_div">
    <Header name="آمدن کی تفصیل" />
    <div className="account_details">
      {/*<Accountinfo
        name="بلال"
        balance="1000"
        expense="14000"
        income="15000"
        form="فارم"
      />*/}
    </div>
    <div className="account_header">
      <div className="account_text">
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
    <AccountTransaction expenseAmount = "1000" expensePlace = "مسجد" expenseDate="12-7-2021"/>
    <AccountTransaction expenseAmount = "10000" expensePlace = "جانور" expenseDate="10-7-2021"/>
    <AccountTransaction expenseAmount = "1000" expensePlace = "مسجد" expenseDate="9-7-2021"/>
    <AccountTransaction expenseAmount = "2000" expensePlace = "جانور" expenseDate="9-7-2021"/>


  </div>
  );
};

export default AccountIncome;
