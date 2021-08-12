import React, { useState }  from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import "../css/Account.css";
import { Link } from "react-router-dom";
import {ACCOUNT} from '../accounts';
import {TRANSACTION} from '../transactions';

const Account = () => {

  const [input, setInput] = useState('');
  const [allAccounts, setallAccounts] = useState(ACCOUNT)
  const [accountList, setAccountList] = useState(ACCOUNT);
  const [allTransactions, setallTransactions] = useState(TRANSACTION)
  const [state, setstate] = useState("")



  const updateInput = async (input) => {
    const filtered = allAccounts.filter(account => {
      return account.name.toString().includes(input)
     })
     setInput(input);
     setAccountList(filtered);
}
// console.log(allTransactions[5].accountId);


  return (
    <div className="main_div">
    <Header name="کھاتہ" />
    <div className="input_box">
    <div className="button">کھاتہ کا اندراج</div>
      <div className="search_box">
      <div className="button" onClick={() => updateInput(state)}>
        تلاش کریں
      </div>
        <input
          type="text"
          placeholder="انداج کریں"
          onChange={(e) => setstate(e.target.value)}
        />
      </div>
    </div>
    {accountList.map((data)=>{
      if (data) {
        return (
          <Link to={`/account/${data.id}`} style={{textDecoration:"none"}}><Accountinfo 
          data={data} 
          income = {allTransactions.reduce((acc, list) => {
            if(list.accountId === data.id && list.transType === "income") 
            acc+= list.amount;
            return acc;
            }, 0)}
            expense = {allTransactions.reduce((acc, list) => {
              if(list.accountId === data.id && list.transType === "expense") 
              acc+= list.amount;
              return acc;
              }, 0)}
          />
          </Link>
        )
        }
      }
    )
    }
  </div>
  );
};

export default Account;
