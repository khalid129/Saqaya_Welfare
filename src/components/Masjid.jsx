import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import "../css/masjid.css";
import "../css/home.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ContainerStyles = {
  width: "1200px",
  background: "red"
}

const HeaderStyle = {
  width: "500px",
  fontWeight: "bold",
  fontSize: "28px",
  textAlign: "center",
  fontFamily: "Jameel",
  backgroundColor: "#48dbfb"
};

const tableStyle = {
  fontSize: "20px",
  textAlign: "center",
  fontFamily: "Jameel"
};

const initialState = {
  id: 0,
  name: "",
  province: "",
  area: "",
  manager: "",
};
const initialState2 = {
  masjidId: null,
  date: "",
  voucher: "",
  bank: "",
  reciever: "",
  detail: "",
  purpose: "مسجد",
  voucherNo: "",
  amount: null,
  loan: false,
  accountName: "",
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
  fetchTransactions,
  postExpense,
  accounts,
}) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [allMasjid, setallMasjid] = useState(masjids);
  const [masjidList, setMasjidList] = useState(masjids);
  const [allAccounts, setAccounts] = useState(accounts);
  const [allTransactions, setallTransactions] = useState(transactions);
  const [button, setButton] = useState("id");
  const [changeButton, setChangeButton] = useState(null);
  const [state, setstate] = useState("");
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(initialState);
  const [modal2, setModal2] = useState(false);
  const [form2, setForm2] = useState(initialState2);
  const [enter, setenter] = useState('')

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
    const account = allAccounts.filter(
      (account) => account.name === form2.accountName
    )[0];
    // console.log(account,"ye account");
    dispatch(
      postExpense(
        account.id,
        parseInt(form2.masjidId),
        "expense",
        form2.date,
        form2.voucher,
        form2.bank,
        form2.reciever,
        form2.detail,
        form2.purpose,
        form2.voucherNo,
        form2.loan,
        parseInt(form2.amount)
      )
    );
    setForm2(initialState);
    toggleModal2();
  };


  const toggleModal = () => {
    setChangeButton(true)
    setModal(!modal);
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const index = allMasjid.findIndex(masjid => masjid.id === form.id)
    console.log(index, "index");
    const updatedMasjid = [...allMasjid]
    console.log(form, "form");
    updatedMasjid[index] = form
    console.log(updatedMasjid, "updatedMasjid");
    setMasjidList(updatedMasjid)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!changeButton) {
      handleUpdate();
    }
    else {
      dispatch(
        postMasjid(form.id, form.name, form.province, form.area, form.manager)
      );
      setallMasjid(dispatch(fetchMasjids()));
      setMasjidList(dispatch(fetchMasjids()));
      setForm(initialState);
    }
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

  const editMasjid = (data) => {
    setChangeButton(false);
    console.log(data, "data");
    setForm(data)
    setModal(!modal);
  }

  // Press enter functionality

  const handler = (e) => {
    if (e.key === "Enter") {
      console.log(e.key)
      updateInput(state, button)
    }
  }


  if (masjidLoading) {
    return <h4>Loading</h4>;
  } else if (masjidErrMess) {
    return <h4>{masjidErrMess}</h4>;
  } else
    return (
      <div className="main_div">
        <Header name="مساجد" />
        <div className="input_box">
          <div className="button expense" onClick={toggleModal}>
            مسجد کا اندراج
          </div>
          <div className="button expense" onClick={toggleModal2}>
            خرچ کا اندراج
          </div>
          <div className="search_box">
            <div className="button search"
              onClick={() => updateInput(state, button)}
            >
              <SearchIcon /> تلاش کریں
            </div>
            <input
              type="text"
              placeholder="تلاش کریں"
              onChange={(e) => setstate(e.target.value)}
              onKeyPress={(e) => handler(e)}
            />
          </div>
        </div>
        <div className="category_type">
          <div className={button === "manager" ? "active" : "button"} onClick={() => setButton("manager")}>
            نگران کا نام
          </div>
          <div className={button === "province" ? "active" : "button"} onClick={() => setButton("province")}>
            صوبہ کا نام
          </div>
          <div className={button === "area" ? "active" : "button"} onClick={() => setButton("area")}>
            علاقہ کا نام
          </div>
          <div className={button === "name" ? "active" : "button"} onClick={() => setButton("name")}>
            مسجد کا نام
          </div>
          <div className={button === "id" ? "active" : "button"} onClick={() => setButton("id")}>
            مسجد نمبر
          </div>
        </div>
        <div className="expense_table">
          <TableContainer component={Paper} style={{ width: 1400 }}>
            <Table className={ContainerStyles} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={HeaderStyle}>تبدیلی</TableCell>
                  <TableCell style={HeaderStyle}>کل رقم</TableCell>
                  <TableCell style={HeaderStyle}>نگران کا نام</TableCell>
                  <TableCell style={HeaderStyle}>صوبہ</TableCell>
                  <TableCell style={HeaderStyle}>علاقہ</TableCell>
                  <TableCell style={HeaderStyle}>مسجد کا نام</TableCell>
                  <TableCell style={HeaderStyle}>مسجد نمبر</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {masjidList &&
                  masjidList
                    .slice(0)
                    .reverse()
                    .map((data, index) => {
                      if (data) {
                        return (
                          <TableRow component={Link} style={{ textDecoration: 'none', color: 'black' }} to={`/masjid/${data.id}`} key={data.name}>
                            <TableCell style={tableStyle}>
                              <Link to={'/masjid'} class="editIcon" >
                                <EditIcon onClick={() => { editMasjid(data) }} style={{ color: "#4CAF50" }} />
                              </Link>
                            </TableCell>
                            <TableCell style={tableStyle}>
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
                            </TableCell>
                            <TableCell style={tableStyle}>{data.manager}</TableCell>
                            <TableCell style={tableStyle}>{data.province}</TableCell>
                            <TableCell style={tableStyle}>{data.area}</TableCell>
                            <TableCell style={tableStyle}>{data.name}</TableCell>
                            <TableCell style={tableStyle}>{data.id}</TableCell>
                          </TableRow>
                        );
                      }
                      return null;
                    })}
              </TableBody>
            </Table>
          </TableContainer>
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
                id="update"
                type="submit"
                value="submit"
                style={{
                  backgroundColor: "#90DAF2",
                  color: "black",
                  borderColor: "#90DAF2",
                  marginTop: "10px",
                }}
              >
                {changeButton ? "اندراج کریں" : "تبدیل کریں"}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
        <Modal isOpen={modal2} toggle={toggleModal2}>
          <ModalHeader>خرچے کا اندراج</ModalHeader>
          <ModalBody>
            <Form style={{ textAlign: "right" }} onSubmit={handleSubmit2}>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="id">
                  مسجد نمبر
                </Label>
                <Input
                  type="number"
                  id="masjidId"
                  name="masjidId"
                  onChange={handleChange2}
                  value={form2.masjidId}
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
                <Label style={{ fontSize: "4vh" }} htmlFor="voucher">
                  واسطہ/واؤچر
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="voucher"
                  name="voucher"
                  onChange={handleChange2}
                  value={form2.voucher}
                />
              </FormGroup>

              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="bank">
                  بینک کا نام/مد
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="bank"
                  name="bank"
                  onChange={handleChange2}
                  value={form2.bank}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="reciever">
                  کھاتہ بنام/وصول کنندہ کا نام
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="reciever"
                  name="reciever"
                  onChange={handleChange2}
                  value={form2.reciever}
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
                <Label style={{ fontSize: "4vh" }} htmlFor="voucherNo">
                  S.No/واؤچر نمبر
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="voucherNo"
                  name="voucherNo"
                  onChange={handleChange2}
                  value={form2.voucherNo}
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
                  onChange={handleChange2}
                  value={form2.amount}
                />
              </FormGroup>
              <FormGroup>
                <Label style={{ fontSize: "4vh" }} htmlFor="accountId">
                  کھاتہ
                </Label>
                <Input
                  style={{ textAlign: "right" }}
                  type="text"
                  id="accountName"
                  name="accountName"
                  onChange={handleChange2}
                  value={form2.accountName}
                />
              </FormGroup>
              <FormGroup check>
                <Label check style={{ fontSize: "4vh" }}>
                  <Input
                    type="checkbox"
                    name="loan"
                    onChange={() => setForm2((prev) => ({ ...prev, loan: !form2.loan }))}
                    checked={form2.loan}
                  />{' '}
                  قرضہ
                </Label>
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

export default Masjid;