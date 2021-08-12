import React from "react";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import Header from "./Header";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TRANSACTION } from "../transaction.js";

const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

const tableStyle = {fontWeight:'bold', fontSize:'20px', textAlign:'center'};
const MasjidDetail = () => {
  
let filterTransaction = TRANSACTION.filter((transaction)=>{return transaction.transType == 'expense';})
    const classes = useStyles();


  return (
    <div className="main_div">
    <Header name="اخراجات کی تفصیل"/>
    <div className="masjid_detail">
      <div className="button">خرچ کا اندراج</div>
      <div className="masjid_header_info">
      <p>مسجد نمبر :1</p>
      <h1>ابوبکر صدیق رضی اللہ عنہ</h1>
      <p>علاقہ : ٹندواعظم , سندھ</p>
      <p>نگران : بلال</p>
      </div>
    </div>
    <div className="expense_table">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={tableStyle}>بھیجی ہوئی رقم</TableCell>
            <TableCell style={tableStyle}>واؤچرنمبر</TableCell>
            <TableCell style={tableStyle}>تفصیل </TableCell>
            <TableCell style={tableStyle}>کھاتہ بنام /وصول کنندہ  کا نام</TableCell>
            <TableCell style={tableStyle}>بینک کا نام/مد </TableCell>
            <TableCell style={tableStyle}>واسطہ/واؤچر</TableCell>
            <TableCell style={tableStyle}>تاریخ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { filterTransaction.map((transaction) => (
            <TableRow key={transaction.name}>
              <TableCell align="center">{transaction.amount}</TableCell>
              <TableCell align="center">{transaction.voucherNo}</TableCell>
              <TableCell align="center">{transaction.detail}</TableCell>
              <TableCell align="center">{transaction.reciever}</TableCell>
              <TableCell align="center">{transaction.bank}</TableCell>
              <TableCell align="center">{transaction.voucher}</TableCell>
              <TableCell align="center">{transaction.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
};

export default MasjidDetail;
