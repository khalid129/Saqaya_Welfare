import React, {useState} from 'react';
import "../css/Account.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const AccountTransaction = (props) => {

  const [changeButton, setChangeButton] = useState(null)

  const deleteTransaction = (transaction)=>{
    console.log(transaction.id);
    alert("Do you want to Delete Transaction?")
  }

  const editTransaction = (transaction)=>{
    // toggleModal();
    setChangeButton(false)
    console.log(transaction.id);
  }

  // onClick={()=>{editTransaction(transaction,toggleModal)}}
  // onClick={()=>{deleteTransaction(transaction)}} 
  return (
      <div className="account_ledger_details">
        <div className="edits">
          <DeleteIcon style={{color: "#D11A2A", cursor:"pointer"}}/>
          <EditIcon  style={{color:"#4CAF50", cursor:"pointer"}}/>
        </div>
        <div className="expense_amount">
        <span id="amount">{props.income.amount}</span>
        </div>
        <div className="expense_place">
          <span id="expense">مسجد</span>
        </div>
        <div className="expense_date">
        <span id="income">{props.income.date}</span>
        </div>
      </div>
    )
}

export default AccountTransaction
