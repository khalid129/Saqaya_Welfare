import React from "react";
import Header from "./Header";
import Accountinfo from "./Accountinfo";
import MasjidTransaction from "./MasjidTransaction";
import "../css/Account.css";
import "../css/masjid.css";

const MasjidExpense = ({props}) => {
  return (
    <div className="main_div">
      <Header name="خرچ کی تفصیل" />
      <div className="account_details">
        {/* <Accountinfo
          name="بلال"
          balance="1000"
          expense="14000"
          income="15000"
          form="فارم"
          accountDetail="آمدن کی تفصیل"
        /> */}
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
      <div className="masjidTransaction">
        <MasjidTransaction/>
        <MasjidTransaction/>
        <MasjidTransaction/>
      </div>
    </div>
  );
};

export default MasjidExpense;
