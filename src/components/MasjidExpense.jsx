import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const MasjidExpense = () => {
  return (
    <div className="main_div">
      <Header name="خرچ کی تفصیل" />
      <div className="account_details">
        <Accountinfo
          name="بلال"
          balance="1000"
          expense="14000"
          income="15000"
          form="فارم"
        />
      </div>
      <div className="account_header">
        <div className="account_ledger">
          <div className="amount">
            <span>کل رقم</span>
          </div>
          <div className="place">
            <span>مسجد کا نام</span>
          </div>
          <div className="date">
            <span>تاریخ</span>
          </div>
        </div>
      </div>
      <AccountTransaction expenseAmount = "2000" expensePlace =  "مسجد عمر" expenseDate="12-Jul-2021"/>
      <AccountTransaction expenseAmount = "3000" expensePlace =  "مسجد عائشہ" expenseDate="10-Jul-2021"/>
    </div>
  );
};

export default MasjidExpense;
