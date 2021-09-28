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
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const tableStyle = {
  fontWeight: "bold",
  fontSize: "20px",
  textAlign: "center",
};

const initialState = {
  date: "",
  voucher: "",
  bank: "",
  reciever: "",
  detail: "",
  voucherNo: "",
  amount: null,
  accountName: "",
};

const MasjidDetail = (props) => {
  let sum = 0
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(props.expenses);
  const [allAccounts,setAccounts] = useState(props.accounts)
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
        parseInt(form.amount)
      )
    );
    setTransactions(dispatch(props.fetchTransactions()));
    setForm(initialState);
    toggleModal();
  };

  const grandTotal = (value) => {
    sum+=value
  }

  const classes = useStyles();

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
                  <TableCell style={tableStyle}>تبدیلی</TableCell>
                  <TableCell style={tableStyle}>کھاتہ</TableCell>
                  <TableCell style={tableStyle}>بھیجی ہوئی رقم</TableCell>
                  <TableCell style={tableStyle}>واؤچرنمبر</TableCell>
                  <TableCell style={tableStyle}>تفصیل </TableCell>
                  <TableCell style={tableStyle}>
                    کھاتہ بنام /وصول کنندہ کا نام
                  </TableCell>
                  <TableCell style={tableStyle}>بینک کا نام/مد </TableCell>
                  <TableCell style={tableStyle}>واسطہ/واؤچر</TableCell>
                  <TableCell style={tableStyle}>تاریخ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.name}>
                    <TableCell>
                      <div className="edits">
                        <DeleteIcon/>
                        <EditIcon/>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {props.accounts.map((accountName) => {
                        if (accountName.id === transaction.accountId) {
                          return accountName.name;
                        }
                      })}
                    </TableCell>
                    <TableCell align="center">
                    {transaction.amount}
                    
                    </TableCell>
                    {grandTotal(transaction.amount)}
                    <TableCell align="center">
                      {transaction.voucherNo}
                    </TableCell>
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
                اندراج کریں
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