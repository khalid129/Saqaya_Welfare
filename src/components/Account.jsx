import React, { useState } from "react";
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
import Accountinfo from "./Accountinfo";
import "../css/Account.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';

const initialState = {
  id: null,
  name: "",
};

const initialState2 = {
  accountName:"",
  date: "",
  place: "",
  detail: "",
  amount: null,
};

const Account = (props) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [allAccounts, setallAccounts] = useState(props.accounts);
  const [accountList, setAccountList] = useState(props.accounts);
  const [allTransactions, setallTransactions] = useState(props.transactions);
  const [state, setstate] = useState("");
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [modal2, setModal2] = useState(false);
  const [form2, setForm2] = useState(initialState2);
  const [changeButton, setchangeButton] = useState(null)

  const toggleModal2 = () => {
    setModal2(!modal2);
  };

  const handleChange2 = ({ target: { name, value } }) => {
    setForm2((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();
    const account = allAccounts.filter((account) => account.name === form2.accountName)[0]
    dispatch(
      props.postIncome(
        account.id,
        null,
        "income",
        form2.date,
        "",
        "",
        "",
        form2.detail,
        "",
        parseInt(form2.amount)
      )
    );
    // dispatch(fetchTransactions());
    setForm2(initialState2);
    toggleModal2();
  };

  const toggleModal = () => {
    setchangeButton(true)
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
    dispatch(props.postAccount(Math.floor(Math.random() * (20 - 10)) + 10, form.name));
    setallAccounts(dispatch(props.fetchAccounts()));
    setAccountList(dispatch(props.fetchAccounts()));
    setForm(initialState);
    toggleModal();
  };

  const updateInput = async (input) => {
    const filtered = allAccounts.filter((account) => {
      return account.name.toString().includes(input);
    });
    setInput(input);
    setAccountList(filtered);
  };
  // console.log(allTransactions[5].accountId);

  const editData = (data) =>{
    setchangeButton(false)
    setModal(!modal);
    console.log(data.id);
  }

  // Press enter functionality

  const handler = (e)=>{
    if(e.key==="Enter"){
      console.log(e.key)
      updateInput(state)
    }
  }

  return (
    <div className="main_div">
      <Header name="کھاتہ" />
      <div className="input_box">
        <div className="button" onClick={toggleModal}>
          کھاتہ کا اندراج
        </div>
        <div className="button"  onClick={toggleModal2}>آمدن کا اندراج</div>
        <div className="search_box">
          <div className="button search"
          onClick={() => updateInput(state)} 
          >
            <SearchIcon/> تلاش کریں
          </div>
          <input
            type="text"
            placeholder="تلاش کریں"
            onChange={(e) => setstate(e.target.value)}
            onKeyPress={(e)=>handler(e)}
          />
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>نئی کھاتہ کا اندراج</ModalHeader>
        <ModalBody>
          <Form style={{ textAlign: "right" }} onSubmit={handleSubmit}>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="name">
                نام
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={form.name}
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
              {changeButton?"اندراج کریں":"تبدیل کریں"}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal2} toggle={toggleModal2}>
        <ModalHeader>آمدن</ModalHeader>
        <ModalBody>
          <Form style={{ textAlign: "right" }} onSubmit={handleSubmit2}>
          <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="id">
                کھاتہ نام
              </Label>
              <Input
                type="text"
                id="accountName"
                name="accountName"
                onChange={handleChange2}
                value={form2.accountName}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="date">
                تاریخ
              </Label>
              <Input
                type="date"
                id="date"
                name="date"
                onChange={handleChange2}
                value={form2.date}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="purpose">
                مد
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="purpose"
                name="purpose"
                onChange={handleChange2}
                value={form2.purpose}
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
                onChange={handleChange2}
                value={form2.detail}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="amount">
                رقم
              </Label>
              <Input
                type="number"
                id="amount"
                name="amount"
                onChange={handleChange2}
                value={form2.amount}
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
      {accountList.slice(0).reverse().map((data) => {
        if (data) {
          return (
            <Link to={`/account/${data.id}`} style={{ textDecoration: "none" }}>
              <Accountinfo
                data={data}
                income={allTransactions.reduce((acc, list) => {
                  if (list.accountId === data.id && list.transType === "income")
                    acc += list.amount;
                  return acc;
                }, 0)}
                expense={allTransactions.reduce((acc, list) => {
                  if (
                    list.accountId === data.id &&
                    list.transType === "expense" && 
                    list.transType === "expense" && !list.loan
                  )
                    acc += list.amount;
                  return acc;
                }, 0)}
                loan={allTransactions.reduce((acc, list) => {
                  if (
                    list.accountId === data.id &&
                    list.loan
                  )
                    acc += list.amount;
                  return acc;
                }, 0)}
                edit={()=>{editData(data)}}
              />
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Account;