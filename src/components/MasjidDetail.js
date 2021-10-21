import React, { useState } from "react";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
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
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PrintIcon from '@material-ui/icons/Print';
import Paper from "@material-ui/core/Paper";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const tableStyle = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Jameel"
};

const HeaderStyle = {
  width: "500px",
  fontWeight: "bold",
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Jameel",
  backgroundColor:"#48dbfb"
};


const initialState = {
  date: "",
  voucher: "",
  bank: "",
  reciever: "",
  detail: "",
  voucherNo: "",
  amount: null,
  loan:false,
  accountName: "",
};

const MasjidDetail = (props) => {
  let sum = 0
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(props.expenses);
  const [allAccounts,setAccounts] = useState(props.accounts)
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [changeButton, setChangeButton] = useState(null)

  const toggleModal = () => {
    setChangeButton(true)
    setModal(!modal);
  };

  const handleChange = ({ target: { name, value, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) : value
    }));
  };

  const handleUpdate = () => {
    const index = transactions.findIndex(transaction => transaction.id === form.id)
    const updatedTransactions = [...transactions]
    updatedTransactions[index] = form
    setTransactions(updatedTransactions)  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    if(!changeButton){
      handleUpdate();
    } 
    else{
      const account = allAccounts.filter((account) => account.name === form.accountName)[0]
      dispatch(
        props.postExpense(
          account.id,
          props.masjid.id,
          "expense",
          form.date,
          form.voucher,
          form.bank,
          form.reciever,
          form.detail,
          form.voucherNo,
          form.loan,
          form.amount
        )
      );
      setTransactions(dispatch(props.fetchTransactions()));
      setForm(initialState);

    }
    toggleModal();

  };

  const grandTotal = (value) => {
    sum+=value
  }

  const classes = useStyles();

  const deleteTransaction = (id)=>{
    console.log(id,"id");
    // alert("Do you want to Delete Transaction")
    // dispatch(props.deleteTrans(id));
    // setTransactions(dispatch(props.fetchTransactions()));
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  const editTransaction = (transaction)=>{
    setChangeButton(false);
    const accountName = allAccounts.filter((account) => account.id === transaction.accountId)[0]
    setForm(transaction)
    setForm( prev => ({...prev,accountName:accountName.name,date:formatDate(transaction.date)}))
    setModal(!modal);
    console.log(transaction.date);
  }

  const columns = [
    {title:"Name", field:"name"},
    {title:"Amount", field:"amount"},
    {title:"VoucherNo", field:"voucherNo"},
    {title:"Detail", field:"detail"},
    {title:"Reciever", field:"reciever" },
    {title:"Bank", field:"bank" },
    {title:"Voucher", field:"voucher" },
    {title:"Date", field:"date" },
    ]
  const printTransaction = ()=>{
    console.log(transactions)
    const doc = new jsPDF();
    doc.addFont('../Fonts/fonts/NotoNastaliqUrdu-Regular.ttf', 'NotoNastaliqUrdu-Regular', 'normal');
    doc.setFont('NotoNastaliqUrdu-Regular');
    doc.text("Jeee", 20,20);
    doc.autoTable({
      columns:columns.map(col=>({...col,dataKey:col.field})),
      body:transactions})
    doc.save('table.pdf');
  }

  if (props.transactionLoading) {
    return <h4>Loading</h4>;
  } else if (props.transactionErrMess) {
    return <h4>{props.transactionErrMess}</h4>;
  } else if (props.masjid) {
    return (
      <div className="main_div">
        <Header name="اخراجات کی تفصیل" />
        <div className="masjid_detail">
          <div className="button" onClick={toggleModal}>
            خرچ کا اندراج
          </div>
          <div onClick={printTransaction}>
            <PrintIcon className="print-pdf"/>
          </div>
          <div className="masjid_header_info">
            <p>مسجد نمبر :{props.masjid.id}</p>
            <h1>{props.masjid.name}</h1>
            <p>
              علاقہ : {props.masjid.area}
            </p>
            <p>
              صوبہ : {props.masjid.province}
            </p>
            <p>نگران : {props.masjid.manager}</p>
          </div>
        </div>
        <div className="expense_table">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={HeaderStyle}>تبدیلی</TableCell>
                  <TableCell style={HeaderStyle}>کھاتہ</TableCell>
                  <TableCell style={HeaderStyle}>بھیجی ہوئی رقم</TableCell>
                  <TableCell style={HeaderStyle}>واؤچرنمبر</TableCell>
                  <TableCell style={HeaderStyle}>تفصیل </TableCell>
                  <TableCell style={HeaderStyle}>
                    کھاتہ بنام /وصول کنندہ کا نام
                  </TableCell>
                  <TableCell style={HeaderStyle}>بینک کا نام/مد </TableCell>
                  <TableCell style={HeaderStyle}>واسطہ/واؤچر</TableCell>
                  <TableCell style={HeaderStyle}>تاریخ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.name}>
                    <TableCell style={tableStyle}>
                      <div className="edits">
                      <DeleteIcon onClick={()=>{deleteTransaction(transaction.id)}} style={{color: "#D11A2A", cursor:"pointer"}}/>
                      <EditIcon onClick={()=>{editTransaction(transaction)}} style={{color:"#4CAF50", cursor:"pointer"}}/>
                      </div>
                    </TableCell>
                    <TableCell align="center" style={tableStyle}>
                      {props.accounts.map((accountName) => {
                        if (accountName.id === transaction.accountId) {
                          return accountName.name;
                        }
                      })}
                    </TableCell>
                    <TableCell align="center" style={tableStyle}>
                    {transaction.amount}
                    
                    </TableCell>
                    {grandTotal(transaction.amount)}
                    <TableCell align="center">
                      {transaction.voucherNo}
                    </TableCell>
                    <TableCell style={tableStyle} align="center">{transaction.detail}</TableCell>
                    <TableCell style={tableStyle} align="center">{transaction.reciever}</TableCell>
                    <TableCell style={tableStyle} align="center">{transaction.bank}</TableCell>
                    <TableCell style={tableStyle} align="center">{transaction.voucher}</TableCell>
                    <TableCell style={tableStyle} align="center">{transaction.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader>خرچے کا اندراج</ModalHeader>
          <ModalBody>
            <Form style={{ textAlign: "right" }} onSubmit={handleSubmit}>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="date">
                  تاریخ
                </Label>
                <Input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  value={form.date}
                />
              </FormGroup>

              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="voucher">
                  واسطہ/واؤچر
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="voucher"
                  name="voucher"
                  onChange={handleChange}
                  value={form.voucher}
                />
              </FormGroup>

              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="bank">
                  بینک کا نام/مد
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="bank"
                  name="bank"
                  onChange={handleChange}
                  value={form.bank}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="reciever">
                  کھاتہ بنام/وصول کنندہ کا نام
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="reciever"
                  name="reciever"
                  onChange={handleChange}
                  value={form.reciever}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="detail">
                  تفصیل
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="detail"
                  name="detail"
                  onChange={handleChange}
                  value={form.detail}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="voucherNo">
                  S.No/واؤچر نمبر
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="voucherNo"
                  name="voucherNo"
                  onChange={handleChange}
                  value={form.voucherNo}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="amount">
                  بھیجی ہوئی رقم
                </Label>
                <Input
                  type="number"
                  id="amount"
                  name="amount"
                  onChange={handleChange}
                  value={form.amount}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="accountId">
                  کھاتہ
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="accountName"
                  name="accountName"
                  onChange={handleChange}
                  value={form.accountName}
                />
              </FormGroup>
              <FormGroup check>
                <Label check style={{ fontSize: "4vh" }}>
                  <Input 
                  type="checkbox" 
                  name="loan"
                  onChange={()=>setForm((prev)=>({...prev,loan:!form.loan}))}
                  checked={form.loan}
                  />{' '}
                  قرضہ
                </Label>
              </FormGroup>
              <Button
                type="submit"
                value="submit"
                style={{
                  backgroundColor: "#90DAF2",
                  color: "black",
                  borderColor: "#90DAF2",
                  marginTop: "10px",
                }}
              >
                {changeButton?"اندراج کریں":"تبدیل کریں"}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <div className="total_amount">
          <div><h2>{sum}</h2></div>
          <div><h2>: کل رقم </h2></div>
        </div>
      </div>
    );
  } else {
    return <h4>No such masjid of this id</h4>;
  }
};

export default MasjidDetail;