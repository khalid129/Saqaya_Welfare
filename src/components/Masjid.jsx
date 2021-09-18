import React, { useState } from "react";
import {Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Input,Label,} from "reactstrap";
import "../css/masjid.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const initialState = {
  id: 0,
  name: "",
  province: "",
  area: "",
  manager: "",
};

const Masjid = ({
  masjids,
  masjidLoading,
  masjidErrMess,
  transactions,
  transactionLoading,
  transactionErrMess,
  postMasjid,
  fetchMasjids,
}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [allMasjid, setallMasjid] = useState(masjids);
  const [masjidList, setMasjidList] = useState(masjids);
  const [allTransactions, setallTransactions] = useState(transactions);
  const [button, setButton] = useState("id");
  const [state, setstate] = useState("");
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
    dispatch(
      postMasjid(form.id, form.name, form.province, form.area, form.manager)
    );
    setallMasjid(dispatch(fetchMasjids()));
    setMasjidList(dispatch(fetchMasjids()));
    setForm(initialState);
    toggleModal();
  };

  const updateInput = async (input, property) => {
    // console.log(input,property);
    const filtered = allMasjid.filter((masjid) => {
      return masjid[property].toString().includes(input);
    });
    setInput(input);
    setMasjidList(filtered);
  };

  if (masjidLoading) {
    return <h4>Loading</h4>;
  } else if (masjidErrMess) {
    return <h4>{masjidErrMess}</h4>;
  } else
    return (
      <div className="main_div">
        <Header name="مسجد" />
        <div className="input_box">
          <div className="button expense" onClick={toggleModal}>
            مسجد کا اندراج
          </div>
          <div className="button expense" onClick={toggleModal}>
            خرچ کا اندراج
          </div>
          <div className="search_box">
            <div className="button" onClick={() => updateInput(state, button)}>
              تلاش کریں
            </div>
            <input
              type="text"
              placeholder="تلاش کریں"
              onChange={(e) => setstate(e.target.value)}
            />
          </div>
        </div>
        <div className="category_type">
          <div
            className={button === "manager" ? "active" : "button"}
            onClick={() => setButton("manager")}
          >
            نگران کا نام
          </div>
          <div
            className={button === "province" ? "active" : "button"}
            onClick={() => setButton("province")}
          >
            صوبہ کا نام
          </div>
          <div
            className={button === "area" ? "active" : "button"}
            onClick={() => setButton("area")}
          >
            علاقہ کا نام
          </div>
          <div
            className={button === "name" ? "active" : "button"}
            onClick={() => setButton("name")}
          >
            مسجد کا نام
          </div>
          <div
            className={button === "id" ? "active" : "button"}
            onClick={() => setButton("id")}
          >
            مسجد نمبر
          </div>
        </div>
        <div className="masjid_header">
          <h3>مسجد نمبر</h3>
          <h3>مسجد کا نام</h3>
          <h3>علاقہ</h3>
          <h3 className="province">صوبہ</h3>
          <h3>نگران کا نام</h3>
          <h3>کل رقم</h3>
        </div>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader>نئی مسجد کا اندراج</ModalHeader>
          <ModalBody>
            <Form style={{ textAlign: "right" }} onSubmit={handleSubmit}>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="id">
                  مسجد نمبر
                </Label>
                <Input
                  type="id"
                  id="id"
                  name="id"
                  onChange={handleChange}
                  value={form.id}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="name">
                  مسجد کا نام
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
                <Label style={{ fontSize: "4vh" }} htmlFor="manager">
                  نگران کا نام
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="manager"
                  name="manager"
                  onChange={handleChange}
                  value={form.manager}
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
          {masjidList &&
            masjidList.map((data, index) => {
              if (data) {
                return (
                  <div className="filter_Masjid_name" key={data.name}>
                    <Link
                      to={`/masjid/${data.id}`}
                      className="link"
                      style={{ textDecoration: "none" }}
                    >
                      <div style={{ color: "black" }} className="data">
                        <p>
                          {allTransactions
                            ? allTransactions.reduce((acc, list) => {
                                if (
                                  list.masjidId === data.id &&
                                  list.transType === "expense"
                                )
                                  acc += list.amount;
                                return acc;
                              }, 0)
                            : null}
                        </p>
                        <p>{data.manager}</p>
                        <p>{data.province}</p>
                        <p>{data.area}</p>
                        <p>{data.name}</p>
                        <p>{data.id}</p>
                      </div>
                    </Link>
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
