import React, { useState } from "react";
import Header from "./Header";
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
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
import PrintIcon from '@material-ui/icons/Print';
import Paper from "@material-ui/core/Paper";
import { fetchTransactions, postIncome } from '../redux/ActionCreators';
import { useDispatch  } from 'react-redux'

const AccountIncome = (props) => {

  const initialState = {
    date: "",
    purpose: "",
    detail: "",
    amount: ""
  };
  const dispatch = useDispatch();
  const [income, setIncome] = useState(props.incomes);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [changeButton, setChangeButton] = useState(null)

  const toggleModal=() => {
    setChangeButton(true)
    setModal(!modal)
  }
  const handleChange = ({ target: { name, value, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) : value
    }));
  };

  const handleUpdate = () => {
    const index = income.findIndex(income => income.id === form.id)
    console.log(index);
    const updateIncome = [...income]
    updateIncome[index] = form
    setIncome(updateIncome) 
    setForm(initialState)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!changeButton){
      handleUpdate();
    } 
    else{
    dispatch(postIncome(parseInt(props.data.id),null,"income",form.date,"", "", "", form.detail, "",form.amount))
    dispatch(fetchTransactions())
    setForm(initialState)
    toggleModal();
    }
    toggleModal();

  };

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


  const deleteTransaction = (id) => {
    alert("Do you want to Delete Transaction?");
    setIncome(income.filter((income) => income.id !== id));
  };

  const editTransaction = (income)=>{
    setChangeButton(false);
    setForm(income)
    setForm( prev => ({...prev,date:formatDate(income.date)}))
    setModal(!modal);
    console.log(income)
  }

  const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });

  const tableStyle = {
    width: "500px",
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

  const classes = useStyles();

  return (
    <div className="main_div">
      <Header name="آمدن کی تفصیل" />
      <div className="account_detail_header">
        <div className="account_header_info">
          <h1>{props.account?.name}</h1>
          <h4>آمدن : {props.income}</h4>
          <h4>خرچہ : {props.expense}</h4>
          <h4> قرضہ : {props.loan}</h4>
          <h4> بقیہ : {props.income - props.expense - props.loan}</h4>
          <div>
            <PrintIcon className="print-pdf"/>
          </div>
          <div className="button" onClick={toggleModal}>آمدن اندراج کریں</div>
        </div>
      </div>
      <div className="expense_table">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={HeaderStyle}>تبدیلی</TableCell>
                <TableCell style={HeaderStyle}>کل رقم</TableCell>
                <TableCell style={HeaderStyle}>تفصیل</TableCell>
                <TableCell style={HeaderStyle}>مد</TableCell>
                <TableCell style={HeaderStyle}>تاریخ</TableCell>
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
                            onClick={() => {
                              editTransaction(incomeTransaction);
                            }}
                            style={{ color: "#4CAF50", cursor: "pointer" }}
                          />
                        </div>
                      </TableCell>
                      <TableCell style={tableStyle} align="center">{incomeTransaction.amount}</TableCell>
                      <TableCell style={tableStyle} align="center">{incomeTransaction.detail}</TableCell>
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
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>آمدن</ModalHeader>
        <ModalBody>
        <Form style={{textAlign:'right'}} onSubmit={handleSubmit}>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="date">تاریخ</Label>
            <Input type="date" id="date" name="date" onChange={handleChange} value={form.date}/>
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="purpose">مد</Label>
            <Input style={{textAlign:'right'}} type="text" id="purpose" name="purpose" onChange={handleChange} value={form.purpose} />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="detail">تفصیل</Label>
            <Input style={{textAlign:'right'}} type="text" id="detail" name="detail" onChange={handleChange} value={form.detail}/>
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="amount">رقم</Label>
            <Input type="number" id="amount" name="amount"  onChange={handleChange} value={form.amount} />
          </FormGroup>
          <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}> {changeButton?"اندراج کریں":"تبدیل کریں"}</Button>
        </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AccountIncome;

