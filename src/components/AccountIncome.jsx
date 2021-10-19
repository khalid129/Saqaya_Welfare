import React, {useState} from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const AccountIncome = (props) => {
  const [income, setIncome] = useState(props.incomes)
  
  const deleteTransaction = (id)=>{
    alert("Do you want to Delete Transaction?")
    console.log(id)
    setIncome(income.filter(income =>income.id!==id))
  }

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

      {income.map((incomeTransaction) => {
        return <AccountTransaction id={incomeTransaction.id} income={incomeTransaction} account = {props.account} delete={deleteTransaction}/>;
      })}
    </div>
  );
};

export default AccountIncome;