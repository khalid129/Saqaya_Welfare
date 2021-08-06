import React from "react";
import "../css/masjid.css";
import Header from "./Header";
const Masjid = () => {
  return (
    <div className="main_div">
      <Header name="مسجد" />
      <div className="input_box">
        <div className="search_box">
          <input type="text" placeholder="انداج کریں" />
        </div>
        <div className="button">تلاش کریں</div>
        <div className="button expense">خرچہ</div>
      </div>
      <div className="category_type">
        
        <div className="button">صوبہ کا نام</div>
        <div className="button">شھر کا نام</div>
        <div className="button">نگران کا نام</div>
        <div className="button">مسجد کا نام</div>
        <div className="button">مسجد نمبر</div>
      </div>
    </div>
  );
};

export default Masjid;
