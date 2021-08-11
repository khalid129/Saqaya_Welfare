import React from "react";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import Header from "./Header";
// Table
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

const tableStyle = {fontWeight:'bold', fontSize:'20px', textAlign:'center'};
  
  function createData(date, voucher, bank, reciever, detail, voucherNo, amount) {
    return { date, voucher, bank, reciever, detail, voucherNo, amount };
  }
  
  const rows = [
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000),
    createData('6/17/2021','واؤچر','سقایہ ویلفئیر سوسائٹی','محمد امین خان','-','-',100000)
  ];
  

const MasjidDetail = () => {

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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.voucherNo}</TableCell>
              <TableCell align="center">{row.detail}</TableCell>
              <TableCell align="center">{row.reciever}</TableCell>
              <TableCell align="center">{row.bank}</TableCell>
              <TableCell align="center">{row.voucher}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
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
