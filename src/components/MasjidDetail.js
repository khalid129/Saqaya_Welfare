import React,{useState} from "react";
import "../css/masjid.css";
import "../css/MasjidDetail.css";
import Header from "./Header";
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TRANSACTION } from "../transactions";
import { ACCOUNT } from "../accounts.js";
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
  bankName: "",
  inTheNameOf: "",
  description: "",
  SNo: "",
  amount: 0,
  account: "",
};

const MasjidDetail = (props) => {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);

console.log(props);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = ({ target: { name, value } }) => {
    // console.log({ name, value });
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm(initialState);
    toggleModal();
  };

  


  const classes = useStyles();

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
          <p>علاقہ : {props.masjid.area} , {props.masjid.province}</p>
          <p>نگران : {props.masjid.manager}</p>
        </div>
      </div>
      <div className="expense_table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
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
            { props.expenses.map((transaction) => (
              <TableRow key={transaction.name}>
                <TableCell align="center">{ACCOUNT.map((accountName)=>{
                  if(accountName.id===transaction.accountId)
                  {return accountName.name}})}
                </TableCell>
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
              <Label style={{ fontSize: "4vh" }} htmlFor="bankName">
                بینک کا نام/مد
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="bankName"
                name="bankName"
                onChange={handleChange}
                value={form.bankName}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="inTheNameOf">
                کھاتہ بنام/وصول کنندہ کا نام
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="inTheNameOf"
                name="inTheNameOf"
                onChange={handleChange}
                value={form.inTheNameOf}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="description">
                تفصیل
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="description"
                name="description"
                onChange={handleChange}
                value={form.description}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="SNo">
                S.No/واؤچر نمبر
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="SNo"
                name="SNo"
                onChange={handleChange}
                value={form.SNo}
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
              <Label style={{ fontSize: "4vh" }} htmlFor="account">
                کھاتہ
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="account"
                name="account"
                onChange={handleChange}
                value={form.account}
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
    </div>
  );
};

export default MasjidDetail;