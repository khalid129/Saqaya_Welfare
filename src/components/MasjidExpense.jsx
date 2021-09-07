import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import MasjidTransaction from "./MasjidTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const MasjidExpense = (props) => {


  let uniqueMasjids = [
    ...new Set(props.expenses.map((expense) => expense.masjidId)),
  ].map((id) => {
    let expenses = props.expenses.filter((expense) => expense.masjidId === id);
    return {
      ...expenses[0],
      amount: expenses.reduce((prev, curr) => prev + curr.amount, 0),
    };
  });


  return (
    <div className="main_div">
      <Header name="خرچ کی تفصیل" />
      <div className="account_details">
        {
          <Accountinfo
            data={props.account}
            expense={props.expense}
            income={props.income}
          />
        }
      </div>
      <div className="account_header">
        <div className="account_text">
          <div className="amount">
            <span>کل رقم</span>
          </div>
          <div className="amount">
            <span>علاقہ ، صوبہ</span>
          </div>
          <div className="place">
            <span>مسجد کا نام</span>
          </div>
          <div className="date">
            <span>مسجد نمبر</span>
          </div>
        </div>
      </div>
      <div className="masjidTransaction" >
        {uniqueMasjids.map((expense) => {
          return (
              <MasjidTransaction
                data={expense}
                masjid={props.masjids.filter((masjid) => {
                  return masjid.id === expense.masjidId;
                })}
              />
          );
        })}
      </div>
    </div>
  );
};

export default MasjidExpense;