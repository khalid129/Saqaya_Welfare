import React from 'react'
import Header from "./Header";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import "../css/Account.css";
import "../css/masjid.css";

function LoanDetail(props) {
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

                <div className="account_ledger_details">
                    <div className="edits">
                      <DeleteIcon style={{color: "#D11A2A", cursor:"pointer"}}/>
                      <EditIcon style={{color:"#4CAF50", cursor:"pointer"}}/>
                    </div>
                    <div className="expense_amount">
                        <span id="amount">10000</span>
                    </div>
                    <div className="expense_place">
                        <span id="expense">مسجد</span>
                    </div>
                    <div className="expense_date">
                        <span id="income">12-10-2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetail
