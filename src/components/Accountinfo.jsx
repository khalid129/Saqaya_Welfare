import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import "../css/Account.css";
import "../css/masjid.css";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import { fetchTransactions, postIncome } from '../redux/ActionCreators';
import { useDispatch  } from 'react-redux'


const initialState = {
  date:"",
  place:"",
  detail:"",
  amount:null
}


const Accountinfo = (props) => {
  const dispatch = useDispatch() 
const [modal,setModal]=useState(false);
const [form,setForm]=useState(initialState);


const toggleModal=() => {
  setModal(!modal)
}


const handleChange = ({ target: { name, value } }) => {
  setForm((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit=(event)=>{
  event.preventDefault();
  dispatch(postIncome(parseInt(props.data.id),null,"income",form.date,"", "", "", form.detail, "",parseInt(form.amount)))
  dispatch(fetchTransactions())
  setForm(initialState)
  toggleModal();
}
// console.log(props.data);

    return (

      <>
        <div className="account">
          <div className="account_name">
            <h1>{props.data?.name}</h1>
          </div>
          <div className="account_ledger">
          
          {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
          <Link to={`/account/${props.data?.id}/accountIncome`} style={{textDecoration:"none"}}>
          <div className="button accoutDetail" style={{ color: "black"}}>آمدن کی تفصیل</div>
          </Link>
          </div>}
          {useLocation().pathname===`/account/${props.data?.id}` && <div className="form">
            <div className="button" onClick={toggleModal}>آمدن اندراج کریں</div>
          </div>}
            <div className="balance">
              <label htmlFor="balance">بقیہ : </label>
              <span id="balance">{props.income-props.expense}</span>
            </div>
            <div className="expense">
              <label htmlFor="expense">خرچہ : </label>
              <span id="expense">{props.expense}</span>
            </div>
            <div className="income">
              <label htmlFor="income">آمدن : </label>
              <span id="income">{props.income}</span>
            </div> 
          </div>
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
          <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}>اندراج کریں</Button>
        </Form>
        </ModalBody>
      </Modal>
        </>
    )
}

export default Accountinfo
