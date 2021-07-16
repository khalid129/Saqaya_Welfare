import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import "../css/Account.css";

const Account = () => {
  return (
    <div className="main_div">
      <Header name="کھاتہ" />
      <div className="input_box">
        <div className="search_box">
          <input type="text" placeholder="انداج کریں" />
        </div>
        <div className="button">تلاش کریں</div>
      </div>
      <Accountinfo name="بلال" balance = "1000" expense="2000" income="3000"/>
      <Accountinfo name="وقار" balance = "18000" expense="12000" income="30000"/>
    </div>
  );
};

export default Account;
