import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";
import { Link } from "react-router-dom";

const AccountDetails = (props) => {

  console.log(props);
  const data = props.account

  return (
    <div className="main_div">
      <Header name="کھاتہ کی تفصیل" />
      <div className="account_details">
        <Accountinfo 
        data={data} 
        income = {props.transaction.reduce((acc, list) => {
          if(list.transType === "income") 
          acc+= list.amount;
          return acc;
          }, 0)}
        expense = {props.transaction.reduce((acc, list) => {
          if(list.transType === "expense") 
          acc+= list.amount;
          return acc;
          }, 0)}
        />
      </div>
      <div className="account_header">
        <div className="account_text">
          <div className="amount">
            <span>رقم</span>
          </div>
          <div className="place">
            <span>جگہ خرچ</span>
          </div>
          
          
        </div>
      </div>
      <Link to="/MasjidExpense" style={{textDecoration:"none"}}><AccountTransaction expenseAmount = "500000" expensePlace = "مسجد" /></Link>
      <AccountTransaction expenseAmount = "12000" expensePlace = "جانور" />
      <AccountTransaction expenseAmount = "2000" expensePlace = "پانی" />
      <AccountTransaction expenseAmount = "0" expensePlace = "راشن" />
    </div>
  );
};

export default AccountDetails;
