import React, { useState } from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import "../css/Account.css";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from "@material-ui/core/Paper";

const AccountIncome = (props) => {
  const [income, setIncome] = useState(props.incomes);

  console.log(income, "income");

  const deleteTransaction = (id) => {
    alert("Do you want to Delete Transaction?");
    console.log(id, "idddd");
    setIncome(income.filter((income) => income.id !== id));
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

  const tableStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "Jameel"
  };

  const classes = useStyles();

  return (
    <div className="main_div">
      <Header name="آمدن کی تفصیل" />
      <div className="masjid_detail">
        <div className="masjid_header_info">
          {/* <h1>{props.account.name}</h1> */}
          <p>آمدن : {props.income}</p>
          <p>خرچہ : {props.expense}</p>
          <p> قرضہ : {props.loan}</p>
          <p> بقیہ : {props.income - props.expense - props.loan}</p>
          <div className="button">
            Print
          </div>
        </div>
      </div>
      <div className="expense_table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={tableStyle}>تبدیلی</TableCell>
                <TableCell style={tableStyle}>کل رقم</TableCell>
                <TableCell style={tableStyle}>مد</TableCell>
                <TableCell style={tableStyle}>تاریخ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {income.map((incomeTransaction) => {
                return (
                  <>
                    <TableRow key={incomeTransaction.name}>
                      <TableCell style={tableStyle}>
                        <div className="edits">
                          <DeleteIcon
                            onClick={() => {
                              deleteTransaction(incomeTransaction.id);
                            }}
                            style={{ color: "#D11A2A", cursor: "pointer" }}
                          />
                          <EditIcon
                            // onClick={() => {
                            //   editTransaction();
                            // }}
                            style={{ color: "#4CAF50", cursor: "pointer" }}
                          />
                        </div>
                      </TableCell>
                      <TableCell style={tableStyle} align="center">{incomeTransaction.amount}</TableCell>
                      <TableCell style={tableStyle} align="center">{incomeTransaction.purpose}</TableCell>
                      <TableCell style={tableStyle} align="center">{incomeTransaction.date}</TableCell>
                    </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AccountIncome;

