import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import MasjidTransaction from "./MasjidTransaction";
import { MASAJID } from "../masjids";
import "../css/Account.css";
import "../css/masjid.css";

const MasjidExpense = (props) => {
  const [state, setstate] = useState(MASAJID);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // console.log(props.expenses);

  let uniqueMasjids = [
    ...new Set(props.expenses.map((expense) => expense.masjidId)),
  ].map((id) => {
    let expenses = props.expenses.filter((expense) => expense.masjidId === id);
    return {
      ...expenses[0],
      amount: expenses.reduce((prev, curr) => prev + curr.amount, 0),
    };
  });

  console.log(uniqueMasjids);
  return (
    <div className="main_div">
      <Header name="خرچ کی تفصیل" />
      <div className="account_details">
        {
          <Accountinfo
            data={props.account}
            expense={props.expense}
            income={props.income}
          />
        }
      </div>
      <div className="account_header">
        <div className="account_text">
          <div className="amount">
            <span>کل رقم</span>
          </div>
          <div className="amount">
            <span>علاقہ ، صوبہ</span>
          </div>
          <div className="place">
            <span>مسجد کا نام</span>
          </div>
          <div className="date">
            <span>مسجد نمبر</span>
          </div>
        </div>
      </div>
      <div className="masjidTransaction" onClick={toggle}>
        {uniqueMasjids.map((expense) => {
          return (
            <>
              <MasjidTransaction
                data={expense}
                masjid={state.filter((masjid) => {
                  return masjid.id === expense.masjidId;
                })}
              />
              <Collapse
                style={{
                  marginTop: "1rem",
                  marginLeft: "2.5rem",
                  marginRight: "2.5rem",
                }}
                isOpen={isOpen}
              >
                <Card>
                  <CardBody style={{ backgroundColor: "transparent" }}>
                    <div className="account_ledger_details">
                      <div className="expense_amount">
                        <span id="amount">{expense.amount}</span>
                      </div>
                      <div className="date">
                        <span>Area</span>
                      </div>
                      <div className="expense_place">
                        <span id="expense">name</span>
                      </div>
                      <div className="expense_date">
                        <span id="income">12-Aug-2019</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MasjidExpense;
