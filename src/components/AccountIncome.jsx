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
import DeleteModal from './DeleteModal';
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
  const [deleteModal,setDeleteModal] = useState(null)

  const toggleDeleteModal = () => {
    setDeleteModal(null)
  }

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
    dispatch(postIncome(parseInt(props.account.id),null,"income",form.date,"", "", "", form.detail, form.purpose ,"",form.amount))
    dispatch(fetchTransactions())
  }
  setForm(initialState)
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

const settingTransactionId = (id)=>{
  setDeleteModal(id)
}

const deleteTransaction = (id)=>{
  console.log(id,"id");
  // dispatch(props.deleteTrans(id));
  // setTransactions(dispatch(props.fetchTransactions()));
  // temporary
  setIncome(income.filter((income) => income.id !== id));
  setDeleteModal(null)
}


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
      <Header name="???????? ???? ??????????" />
      <div className="account_detail_header">
        <div className="account_header_info">
          <h1>{props.account?.name}</h1>
          <h4>???????? : {props.income}</h4>
          <h4>???????? : {props.expense}</h4>
          <h4> ???????? : {props.loan}</h4>
          <h4> ???????? : {props.income - props.expense - props.loan}</h4>
          {/*<div>
            <PrintIcon className="print-pdf"/>
          </div>*/}
          <div className="button" onClick={toggleModal}>???????? ???????????? ????????</div>
        </div>
      </div>
      <div className="expense_table">
        <TableContainer component={Paper} style={{ width: 1360 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={HeaderStyle}>????????????</TableCell>
                <TableCell style={HeaderStyle}>???? ??????</TableCell>
                <TableCell style={HeaderStyle}>??????????</TableCell>
                <TableCell style={HeaderStyle}>????</TableCell>
                <TableCell style={HeaderStyle}>??????????</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {deleteModal?<DeleteModal id={deleteModal} state={true} onClick={toggleDeleteModal} />:null}
              {income.map((incomeTransaction) => {
                return (
                  <>
                    <TableRow key={incomeTransaction.name}>
                      <TableCell style={tableStyle}>
                        <div className="edits">
                          <DeleteIcon
                            onClick={() => {
                              setDeleteModal(true);
                              // deleteTransaction(incomeTransaction.id);
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
        <ModalHeader>????????</ModalHeader>
        <ModalBody>
        <Form style={{textAlign:'right'}} onSubmit={handleSubmit}>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="date">??????????</Label>
            <Input type="date" id="date" name="date" onChange={handleChange} value={form.date}/>
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="purpose">????</Label>
            <Input style={{textAlign:'right'}} type="text" id="purpose" name="purpose" onChange={handleChange} value={form.purpose} />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="detail">??????????</Label>
            <Input style={{textAlign:'right'}} type="text" id="detail" name="detail" onChange={handleChange} value={form.detail}/>
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="amount">??????</Label>
            <Input type="number" id="amount" name="amount"  onChange={handleChange} value={form.amount} />
          </FormGroup>
          <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}> {changeButton?"???????????? ????????":"?????????? ????????"}</Button>
        </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AccountIncome;