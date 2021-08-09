import React, { useState } from "react";
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
import "../css/masjid.css";
import Header from "./Header";
import { MASAJID } from "../data";

const initialState = {
  number: 0,
  masjidName: "",
  nigranName: "",
  date: "",
  area: "",
  voucher: "",
  bankName: "",
  inTheNameOf: "",
  province: "",
  description: "",
  SNo: "",
  amount: 0,
  account: "",
};

const Masjid = () => {
  const [input, setInput] = useState("");
  const [allMasjid, setallMasjid] = useState(MASAJID);
  const [masjidList, setMasjidList] = useState(MASAJID);
  const [button, setButton] = useState("id");
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm(initialState);
    toggleModal();
  };

  const updateInput = async (input, property) => {
    console.log(input, property);
    const filtered = allMasjid.filter((masjid) => {
      return masjid[property].toString().includes(input);
    });
    setInput(input);
    setMasjidList(filtered);
  };

  return (
    <div className="main_div">
      <Header name="مسجد" />
        <div className="input_box">
        <div className="button expense" onClick={toggleModal}>
          مسجد کا اندراج
        </div>
        
        <div className="search_box">
        <div className="button" onClick={() => updateInput(state, button)}>
          تلاش کریں
        </div>
          <input
            type="text"
            placeholder="انداج کریں"
            onChange={(e) => setstate(e.target.value)}
          />
        </div>
      </div>
      <div className="category_type">
        <div className="button" onClick={() => setButton("province")}>
          صوبہ کا نام
        </div>
        <div className="button" onClick={() => setButton("city")}>
          شھر کا نام
        </div>
        <div className="button" onClick={() => setButton("manager")}>
          نگران کا نام
        </div>
        <div className="button" onClick={() => setButton("name")}>
          مسجد کا نام
        </div>
        <div className="button" onClick={() => setButton("id")}>
          مسجد نمبر
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader>Expense form</ModalHeader>
        <ModalBody>
          <Form style={{ textAlign: "right" }} onSubmit={handleSubmit}>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="number">
                مسجد نمبر
              </Label>
              <Input
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
                value={form.number}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="masjidName">
                مسجد کا نام
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="name"
                name="masjidName"
                onChange={handleChange}
                value={form.masjidName}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="nigranName">
                نگران کا نام
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="nigranName"
                name="nigranName"
                onChange={handleChange}
                value={form.nigranName}
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
                onChange={handleChange}
                value={form.date}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontSize: "4vh" }} htmlFor="area">
                علاقہ
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="area"
                name="area"
                onChange={handleChange}
                value={form.area}
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
              <Label style={{ fontSize: "4vh" }} htmlFor="province">
                صوبہ
              </Label>
              <Input
                style={{ textAlign: "right" }}
                type="text"
                id="province"
                name="province"
                onChange={handleChange}
                value={form.province}
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
      <div className="masjid_list">
        {masjidList.map((data, index) => {
          if (data) {
            return (
              <div className="filter_Masjid_name" key={data.name}>
                <p>500000</p>
                <p>{data.manager}</p>
                <p>{data.area} ,{data.province}</p>
                <h1>{data.name}</h1>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Masjid;
