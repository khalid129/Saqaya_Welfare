import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import "../css/Account.css";

const Account = () => {
  return (
    <div className="main_div">
      <Header name="کھاتہ" />
      <div className="input_box">
        <div className="button">کھاتہ کا اندراج</div>
        <div className="search_box">
          <input type="text" placeholder="انداج کریں" />
          <div className="button">تلاش کریں</div>
        </div>
        
      </div>
      <Accountinfo name="بلال" balance = "1000" expense="2000" income="3000" accountDetail="آمدن کی تفصیل"/>
      <Accountinfo name="وقار" balance = "18000" expense="12000" income="30000" accountDetail="آمدن کی تفصیل"/>
    </div>
  );
};

export default Account;
