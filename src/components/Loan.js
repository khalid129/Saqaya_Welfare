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
import "../css/Account.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';

const initialState = {
  accountName: "",
  date: "",
  place: "",
  detail: "",
  amount: null,
};

const Loan = (props) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [state, setstate] = useState("");
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);

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

  const updateInput = async (input) => {
    // const filtered = allAccounts.filter((account) => {
    //   return account.name.toString().includes(input);
    // });
    // setInput(input);
    // setAccountList(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(props.postAccount(Math.floor(Math.random() * (20 - 10)) + 10, form.name));
    // setallAccounts(dispatch(props.fetchAccounts()));
    // setAccountList(dispatch(props.fetchAccounts()));
    setForm(initialState);
    toggleModal();
  };

  return (
    <div className="main_div">
      <Header name="قرضہ " />
      <div className="input_box">
       
        <div className="button" onClick={toggleModal}>
        قرضے کا اندراج
        </div>
        <div className="search_box">
          <div className="button search" onClick={() => updateInput(state)}>
          <SearchIcon/> تلاش کریں
          </div>
          <input
            type="text"
            placeholder="تلاش کریں"
            onChange={(e) => setstate(e.target.value)}
          />
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>قرضے کا اندراج</ModalHeader>
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
              اندراج کریں
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Loan;