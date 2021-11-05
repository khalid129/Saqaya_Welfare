import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import AccountTransaction from "./AccountTransaction";
import "../css/Account.css";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ContainerStyles = {
  width: "1200px",
}

const HeaderStyle = {
  width: "500px",
  fontWeight: "bold",
  fontSize: "28px",
  textAlign: "center",
  fontFamily: "Jameel",
  backgroundColor: "#48dbfb"
};

const tableStyle = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Jameel"
};

function IndividualExpense(props) {
  return (
    <div className="account_ledger_details">
      <div className="balance_amount">
        <span id="amount">{props.income - props.expense}</span>
      </div>
      <div className="expense_amount">
        <span id="amount">{props.expense}</span>
      </div>
      <div className="income_amount">
        <span id="amount">{props.income}</span>
      </div>
      <div className="place">
        <span id="expense">{props.purpose}</span>
      </div>
    </div>
  );
}

const AccountDetails = (props) => {
  const data = props.account;
  if (props.transactionLoading) {
    return (
      <h4>Loading</h4>
    );
  }
  else if (props.transactionErrMess) {
    return (
      <h4>{props.transactionErrMess}</h4>
    );
  }
  else
    if (data) {
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
                if (list.transType === "expense" && !list.loan) acc += list.amount;
                return acc;
              }, 0)}
              loan={props.transaction.reduce((acc, list) => {
                if (list.loan) acc += list.amount;
                return acc;
              }, 0)}
            // fetchTransactions={props.fetchTransactions}
            // postIncome={props.postIncome}
            />
          </div>
          <div className="account_header">
        <div className="account_text">
          <div className="balance">
            <span>بقیہ</span>
          </div>
          <div className="expense">
            <span>خرچ</span>
          </div>
          <div className="income">
            <span>آمدن</span>
          </div>
          <div className="place">
            <span>نام</span>
          </div>
        </div>
      </div>
          {/* <div className="expense_table">
            <TableContainer component={Paper} style={{ width: 1230 }}>
              <Table className={ContainerStyles} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={HeaderStyle}>بقیہ</TableCell>
                    <TableCell style={HeaderStyle}>خرچ</TableCell>
                    <TableCell style={HeaderStyle}>آمدن</TableCell>
                    <TableCell style={HeaderStyle}>نام</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow component={Link} style={{ textDecoration: 'none', color: 'black' }} to={`/account/${data.id}/masjidExpense`}>
                    <TableCell style={tableStyle}>a</TableCell>
                    <TableCell style={tableStyle}>{props.transaction.reduce((acc, list) => {
                      if (list.transType === "expense" && list.purpose === "مسجد") acc += list.amount;
                      return acc;
                    }, 0)}</TableCell>
                    <TableCell style={tableStyle}>{props.transaction.reduce((acc, list) => {
                      if (list.transType === "income" && list.purpose === "مسجد") acc += list.amount;
                      return acc;
                    }, 0)}</TableCell>
                    <TableCell style={tableStyle}>مسجد</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div> */}
          <Link to={`/account/${data.id}/masjidExpense`} style={{textDecoration:"none"}}>
      <IndividualExpense 
      expense={props.transaction.reduce((acc, list) => {
        if (list.transType === "expense"  && list.purpose === "مسجد") acc += list.amount;
        return acc;
      }, 0)} 
      income={props.transaction.reduce((acc, list) => {
        if (list.transType === "income"  && list.purpose === "مسجد") acc += list.amount;
        return acc;
      }, 0)}
      purpose={"مسجد"} />
      </Link>
      <IndividualExpense expense={0} income={0} purpose={"جانور"} />
      <IndividualExpense expense={0} income={0} purpose={"پانی"} />
      <IndividualExpense 
      expense={props.transaction.reduce((acc, list) => {
        if (list.transType === "expense"  && list.purpose === "راشن") acc += list.amount;
        return acc;
      }, 0)} 
      income={props.transaction.reduce((acc, list) => {
        if (list.transType === "income"  && list.purpose === "راشن") acc += list.amount;
        return acc;
      }, 0)}
       purpose={"راشن"} />
        </div>
      );
    }
    else {
      return (
        <h4>No such account of this id</h4>
      );
    }
};

export default AccountDetails;