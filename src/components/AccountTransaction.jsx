import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import "../css/Account.css";
import { useDispatch  } from 'react-redux';
import { fetchTransactions, postIncome } from '../redux/ActionCreators';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const initialState = {
  date:"",
  place:"",
  detail:"",
  amount:null
}

const AccountTransaction = (props) => {
  const [changeButton, setChangeButton] = useState(null)
  const [income, setincome] = useState(props.income)
  const [allAccounts,setAccounts] = useState(props.accounts)
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

  const editTransaction = ()=>{
    const accounts = props.account
    const income = props.income
    // setForm(income);
    setForm( prev => ({...prev,amount:income.amount}))
    setModal(!modal);
    console.log(income)
  }
 
  return (
    <>
      <div className="account_ledger_details">
        <div className="edits">
          <DeleteIcon onClick={()=>{props.delete(props.id)}} style={{color: "#D11A2A", cursor:"pointer"}}/>
          <EditIcon onClick={()=>{editTransaction()}} style={{color:"#4CAF50", cursor:"pointer"}}/>
        </div>
        <div className="expense_amount">
        <span id="amount">{props.income.amount}</span>
        </div>
        <div className="expense_place">
          <span id="expense">مسجد</span>
        </div>
        <div className="expense_date">
        <span id="income">{props.income.date}</span>
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
          <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}>تبدیل کریں</Button>
        </Form>
        </ModalBody>
      </Modal>
    </>
    )
}

export default AccountTransaction
