import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const AccountDetails = () => {
  return (
    <div className="main_div">
      <Header name="کھاتہ کی تفصیل" />
      <div className="account_details">
        <Accountinfo name="بلال" balance="1000" expense="14000" income="15000" form="فارم" accountDetail="آمدن کی تفصیل"/>
      </div>
      <div className="account_header">
        <div className="account_text">
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
      <AccountTransaction expenseAmount = "2000" expensePlace = "مسجد" expenseDate="12-7-2021"/>
      <AccountTransaction expenseAmount = "12000" expensePlace = "جانور" expenseDate="10-7-2021"/>
    </div>
  );
};

export default AccountDetails;
