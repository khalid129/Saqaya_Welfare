import React, { useState } from "react";
import Header from "./Header";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import "../css/Account.css";
import "../css/loan.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';



function LoanInfo({id,name,loan}) {
  return(
    <div className="loan">
    <div className="account_name">
        <h1>{name}</h1>
    </div>
    <div className="loanAmount">
      <h4>{loan}:قرض</h4>
    </div>
    <Link to={`/account/${id}/LoanDetail`} style={{textDecoration:"none"}}>
      <div className="button accoutDetail" style={{ color: "black", marginTop:"5px"}}>قرض کی تفصیل</div>
    </Link>
</div>
  )
}

const Loan = (props) => {
  const dispatch = useDispatch();
  const [accounts,setAccounts] = useState(props.accounts)
  const [allAccounts, setallAccounts] = useState(props.accounts);
  const [accountList, setAccountList] = useState(props.accounts);
  const [transactions,setTransactions] = useState(props.transaction)
  const [input, setInput] = useState("");
  const [state, setstate] = useState("");


  console.log(accounts,"accounts");
  console.log(transactions,"loan wali transactions");
  
 
  const updateInput = async (input) => {
    const filtered = allAccounts.filter((account) => {
      return account.name.toString().includes(input);
    });
    setInput(input);
    setAccountList(filtered);
  };

 
  return (
    <div className="main_div">
      <Header name="قرضہ " />
      <div className="input_box">
        <div className="search_box">
          <div className="button search" onClick={() => updateInput(state)}>
          <SearchIcon/> تلاش کریں
          </div>
          <input
            type="text"
            placeholder="تلاش کریں"
            onChange={(e) => setstate(e.target.value)}
          />
        </div>
      </div>
      <div className="loanList">
      {
        accounts.map((data)=>{
          if(data){
            let loanAmount = transactions.reduce((acc, list) => {
              if (
                list.accountId === data.id
              )
                acc += list.amount;
              return acc;
            }, 0)
            return (
              loanAmount>0?<LoanInfo id={data.id} name={data.name} loan={loanAmount}/>:null
            )
          }
        }
        )
      }
      </div>
    </div>
  );
};

export default Loan;