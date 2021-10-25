import React,{useState} from 'react'
import Header from "./Header";
import DeleteIcon from '@material-ui/icons/Delete';
import "../css/Account.css";
import "../css/masjid.css";

function LoanDetail(props) {
    const [loans, setLoans] = useState(props.expenses)
    const deleteTransaction = (id)=>{
        // console.log(id,"id");
        alert("Do you want to Delete Transaction")
        // dispatch(props.deleteTrans(id));
        // setTransactions(dispatch(props.fetchTransactions()));
        setLoans(loans.filter(loan => loan.id !== id))
      }
    return (
        <div>
            <div className="main_div">
                <Header name="قرض کی تفصیل" />
                <div className="account_header">
                    <div className="account_text">
                        <div className="editing">
                            <span>تبدیلی</span>
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

                {loans.map((loan) => {
                    return(
                        <div className="account_ledger_details">
                        <div className="edits">
                          <DeleteIcon onClick={()=>{deleteTransaction(loan.id)}} style={{color: "#D11A2A", cursor:"pointer"}}/>
                        </div>
                        <div className="expense_amount">
                            <span id="amount">{loan.amount}</span>
                        </div>
                        <div className="expense_place">
                            <span id="expense">{loan.purpose}</span>
                        </div>
                        <div className="expense_date">
                            <span id="income">{loan.date}</span>
                        </div>
                    </div>
                    )
                })
                    
            }
            </div>
        </div>
    )
}

export default LoanDetail