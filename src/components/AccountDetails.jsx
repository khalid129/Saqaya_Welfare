import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";
import { Link } from "react-router-dom";

function IndividualExpense(props) {
  return (
    <div className="account_ledger_details">
      <div className="expense_amount">
        <span id="amount">{props.amount}</span>
      </div>
      <div className="expense_place">
        <span id="expense">{props.purpose}</span>
      </div>
    </div>
  );
}

const AccountDetails = (props) => {
  const data = props.account;
  if (props.transactionLoading) {
    return(
      <h4>Loading</h4>
    );
  }
  else if (props.transactionErrMess) {
    return(
        <h4>{props.transactionErrMess}</h4>
    );
  }
  else
  if(data){
  return (
    <div className="main_div">
      <Header name="کھاتہ کی تفصیل" />
      <div className="account_details">
        <Accountinfo
          data={data}
          income={props.transaction.reduce((acc, list) => {
            if (list.transType === "income") acc += list.amount;
            return acc;
          }, 0)}
          expense={props.transaction.reduce((acc, list) => {
            if (list.transType === "expense") acc += list.amount;
            return acc;
          }, 0)}
          // fetchTransactions={props.fetchTransactions}
          // postIncome={props.postIncome}
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
      <Link to={`/account/${data.id}/masjidExpense`} style={{textDecoration:"none"}}>
      <IndividualExpense amount={props.transaction.reduce((acc, list) => {
        if (list.transType === "expense") acc += list.amount;
        return acc;
      }, 0)} purpose={"مسجد"} />
      </Link>
      <IndividualExpense amount={0} purpose={"جانور"} />
      <IndividualExpense amount={0} purpose={"پانی"} />
      <IndividualExpense amount={0} purpose={"راشن"} />
    </div>
  );
    }
    else{
      return(
        <h4>No such account of this id</h4>
      );
    }
};

export default AccountDetails;
