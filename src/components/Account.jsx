import React, { useState } from "react";
import Header from "./Header";
import {Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import Accountinfo from "./Accountinfo";
import "../css/Account.css";
import { Link } from "react-router-dom";
import { useDispatch  } from 'react-redux'


const initialState = {
  id:null,
  name:""
}

const Account = (props) => {
  const dispatch = useDispatch()

  const [input, setInput] = useState('');
  const [allAccounts, setallAccounts] = useState(props.accounts)
  const [accountList, setAccountList] = useState(props.accounts);
  const [allTransactions, setallTransactions] = useState(props.transactions)
  const [state, setstate] = useState("")
  const [modal,setModal]=useState(false);
  const [form,setForm]=useState(initialState);

  const toggleModal=() => {
    setModal(!modal)
  }
  
  
  const handleChange = ({ target: { name, value } }) => {
    // console.log({ name, value });
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(props.postAccount(form.id,form.name))
    setallAccounts(dispatch(props.fetchAccounts()))
    setAccountList(dispatch(props.fetchAccounts()))
    setForm(initialState)
    toggleModal();
  }


  const updateInput = async (input) => {
    const filtered = allAccounts.filter(account => {
      return account.name.toString().includes(input)
     })
     setInput(input);
     setAccountList(filtered);
}
// console.log(allTransactions[5].accountId);

  return (
    <div className="main_div">
      <Header name="کھاتہ" />
      <div className="input_box">
      <div className="button"  onClick={toggleModal}>کھاتہ کا اندراج</div>
        <div className="search_box">
        <div className="button" onClick={() => updateInput(state)}>
          تلاش کریں
        </div>
          <input
            type="text"
            placeholder="انداج کریں"
            onChange={(e) => setstate(e.target.value)}
          />
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>نئی کھاتہ کا اندراج</ModalHeader>
        <ModalBody>
        <Form style={{textAlign:'right'}} onSubmit={handleSubmit}>
        <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="id">کھاتہ نمبر</Label>
            <Input type="id" id="id" name="id"  onChange={handleChange} value={form.id} />
          </FormGroup>
          <FormGroup>
            <Label style={{fontSize:"4vh"}} htmlFor="name">نام</Label>
            <Input style={{textAlign:'right'}} type="text" id="name" name="name" onChange={handleChange} value={form.name} />
          </FormGroup>
          
          <Button type="submit" value="submit" style={{backgroundColor:"#90DAF2",color:'black',borderColor:'#90DAF2',marginTop:'10px'}}>اندراج کریں</Button>
        </Form>
        </ModalBody>
      </Modal>
      {accountList.map((data)=>{
        if (data) {
          return (
            <Link to={`/account/${data.id}`} style={{textDecoration:"none"}}><Accountinfo 
            data={data} 
            income = {allTransactions.reduce((acc, list) => {
              if(list.accountId === data.id && list.transType === "income") 
              acc+= list.amount;
              return acc;
              }, 0)}
              expense = {allTransactions.reduce((acc, list) => {
                if(list.accountId === data.id && list.transType === "expense") 
                acc+= list.amount;
                return acc;
                }, 0)}
            />
            </Link>
          )
          }
        }
      )
      }
    </div>
  );
};

export default Account;
