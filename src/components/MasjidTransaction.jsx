import React from "react";
import "../css/Account.css";
import "../css/masjid.css";

const MasjidTransaction = () => {
  return (
    <div className="account_ledger_details">
      <div className="amount">
        <span id="amount">120000</span>
      </div>
      <div className="ares">
        <span id="area">کراچی ، سندھ</span>
      </div>
      <div className="masjid_name">
        <span id="name">مکی مسجد</span>
      </div>
      <div className="masjid_number">
        <span id="id">1</span>
      </div>
    </div>
  );
};

export default MasjidTransaction;
